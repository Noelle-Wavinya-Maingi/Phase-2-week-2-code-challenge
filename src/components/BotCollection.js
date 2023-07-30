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
              <i className="bi bi-heart-pulse"style={{color: "red", paddingRight:"4px"}} />{bot.health}
            </span>
            <span>
            <i class="bi bi-lightning-fill"  style={{color: "gold", marginLeft: "12px", paddingRight:"4px"}}/>{bot.damage}
            </span>
            <span>
            <i class="bi bi-shield-shaded" style={{color: "silver", marginLeft: "12px", paddingRight:"4px"}} />{bot.armor}
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
