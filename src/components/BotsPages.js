import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "./BotSpecs";

export default function Botspages() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // fetches the data from the deployed server
  function FetchBots() {
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
    FetchBots();
  }, []);

  function showBots(id) {
    setSelectedBot(id);
  }

  function removeBots(id) {
    setBots((prevBots) =>
      prevBots.map((bot) => {
        if (id === bot.id) {
          return { ...bot, isPicked: false };
        } else {
          return bot;
        }
      })
    );
  }

  function enlistBot(id) {
    setBots((prevBots) =>
      prevBots.map((bot) => {
        if (id === bot.id) {
          return { ...bot, isPicked: true };
        } else {
          return bot;
        }
      })
    );
    setSelectedBot(null);
  }


  return (
    <div>
    {selectedBot === null ? (
      // Shows the view of the YourBotArmy and BotCollection if a bot is not selected
      <>
      <YourBotArmy bots={bots.filter((bot) => bot.isPicked)} handleClick={removeBots} />
      <BotCollection bots={bots} handleClick={showBots} />
    </>
    ) : (
      // Shows the view of the botspecs with YourBotArmy and BotCollection
      <>
      <BotSpecs
        bot={bots.find((bot) => bot.id === selectedBot)}
        onBackClick={() => setSelectedBot(null)}
        onEnlistClick={enlistBot}
      />
      <BotCollection bots={bots} handleClick={showBots} />
    </>
    )}
  </div>
  );
}
