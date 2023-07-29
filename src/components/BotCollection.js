import React from "react";

export default function BotCollection({ bots, handleClick }) {
  const botsCollection = bots.map((bot) => (
    <div className="col-md-4 mb-4" key={bot.id} onClick={() => handleClick(bot.id)}>
      <div className="card">
        <div className="bot-image">
          <img className="card-img-top" src={bot.avatar_url} alt={bot.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
           <i>{bot.name}</i>
          </h5>
          <h6>{bot.bot_class} </h6>
          <div className="card-text">
            <p>{bot.catchphrase}</p>
          </div>
          <div className="card-text">
            <span>
              <i className="fas fa-heartbeat" />
              {bot.health}
            </span>
            <span>
              <i className="fas fa-bolt" />
              {bot.damage}
            </span>
            <span>
              <i className="fas fa-shield-alt" />
              {bot.armor}
            </span>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <h2 style={{marginTop: "15px"}}>YOUR BOT COLLECTION</h2> <br></br>
      <div className="row">{botsCollection}</div>
    </div>
  );
}
