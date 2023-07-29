import React from "react";
import BotCollection from "./BotCollection";

function YourBotArmy({ bots }) {
  const botCollection = bots.map((bot) => (
    <BotCollection key={bot.id} bot={bot} />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botCollection}
          <h3 style={{marginTop: "10px"}}>YOUR BOT ARMY</h3>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
