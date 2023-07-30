import React from "react";

function YourBotArmy({ bots, handleClick }) {

  function removeCard(id){
    handleClick(id)
  }

  const botCollection = bots.map((bot) => (
    <div className="col-md-2 mb-3" key={bot.id}>
      <div className="card" style={{justifyContent: "space-between", marginLeft: "40px"}} >
        <div className="bot-image" >
          <img className="card-img-top" src={bot.avatar_url} alt={bot.name}  />
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
          <button className="btn btn-danger" style={{marginTop: "5px"}} onClick={() => removeCard(bot.id)}>Remove Bot</button>
        </div>
      </div>
    </div>
    
  ));

  return (
        <div className="row bot-army-row" style={{background: "olive",marginBottom: "20px"}}>
          <h3 style={{ marginTop: "10px", color: "wheat", marginBottom: "10px" }}>YOUR BOT ARMY</h3>
          {botCollection}
        </div>
  );
}

export default YourBotArmy;
