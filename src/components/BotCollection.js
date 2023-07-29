export default function BotCollection({ bots }) {
  const botCollection = bots.map((bot) => (
    <div key={bot.id}>
      <div className="bot-image">
        <img alt={bot.name} src={bot.avatar_url} />
      </div>
      <div>
        <div className="header">
          {bot.name} <i className={bot.bot_class} />
        </div>
        <div className="phrase">
          <p>{bot.catchphrase}</p>
        </div>
        <div>
          <span>
            <i className="icon heartbeat" /> {bot.health}{" "}
          </span>
          <span>
            <i className="fas fa-bolt" /> {bot.damage}
          </span>
          <span>
            <i className="fas fa-shield" /> {bot.armor}{" "}
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>
        <em>YOUR BOT COLLECTION</em>
      </h2>
      {botCollection}
    </div>
  );
}
