import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";

export default function Botspages() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Fetches the data from the deployed server
  function fetchBots() {
    fetch("https://bot-battlr-jkc6.onrender.com/bots")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch the bots");
      })
      .then((bots) => setBots(bots))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchBots();
  }, []);

  // Handles when the bot is clicked
  function showBot(id) {
    setSelectedBot(id);
  }

  // Removes the bot from the BotCollection and enlists it in YourBotArmy
  function enlistBot(id) {
    const botToEnlist = bots.find((bot) => bot.id === id);
    
    // Checks if a bot with the same class already exists in enlistedBots
    const EnlistedBotExists = enlistedBots.find((bot) => bot.bot_class === botToEnlist.bot_class);
  
    if (botToEnlist && !EnlistedBotExists) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, botToEnlist]);
      setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
      setSelectedBot(null);
    } else{
      alert(`${botToEnlist.bot_class} is already enlisted to your army`)
      setSelectedBot(null);
    }
  }

  // Handles removing the bot from YourBotArmy
  function removeBot(id) {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== id)
    );
    setSelectedBot(null);
  }

  return (
    <div>
      {selectedBot === null ? (
        // Shows the view of the YourBotArmy and BotCollection if a bot is not selected
        <>
          <YourBotArmy bots={enlistedBots} handleClick={removeBot} />
          <BotCollection bots={bots} handleClick={showBot} />
        </>
      ) : (
        // Shows the view of the botspecs with YourBotArmy and BotCollection
        <>
          <YourBotArmy bots={enlistedBots} handleClick={removeBot} />
          <BotSpecs
            bot={bots.find((bot) => bot.id === selectedBot)}
            onBackClick={() => setSelectedBot(null)}
            onEnlistClick={enlistBot}
          />
          <BotCollection bots={bots} handleClick={showBot} />
        </>
      )}
    </div>
  );
}
