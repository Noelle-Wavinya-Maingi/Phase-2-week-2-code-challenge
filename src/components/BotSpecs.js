import React from "react";

export default function BotSpecs({ bot, onBackClick, onEnlistClick }) {
  return (
    <div className="card">
        <h2>{bot.name.toUpperCase()} SPECIFICATIONS</h2>
       <div className="card-body">
        <img src={bot.avatar_url} alt={bot.name} />
          <h5 className="card-title">
            <h4><i>{bot.name} </i></h4>
            {bot.bot_class}
          </h5>
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
        <div style={{display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px"}}>
      <button className = "btn btn-primary" onClick={onBackClick} style={{fontFamily: "Inconsolata, monospace"}}>Back</button><br></br>
      <button className = "btn btn-success" onClick={() => onEnlistClick(bot.id)} style={{fontFamily: "Inconsolata, monospace"}}>Enlist {bot.name}</button>
      </div>
    </div>
  );
}
