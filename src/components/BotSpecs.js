import React from "react";

export default function BotSpecs({ bot, onBackClick, onEnlistClick }) {
  return (
    <div className="card">
       <div className="card-body">
        <img src={bot.avatar_url} alt={bot.name} />
          <h5 className="card-title">
            {bot.name} <i className={bot.bot_class} />
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
      <button className = "btn btn-primary" onClick={onBackClick}>Back</button>
      <button className = "btn btn-success" onClick={() => onEnlistClick(bot.id)}>Enlist {bot.name}</button>
    </div>
  );
}
