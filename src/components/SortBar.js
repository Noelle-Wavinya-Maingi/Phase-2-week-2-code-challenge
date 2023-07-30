import { useState } from "react";

export default function SortBar({ bots, setBots }) {
  const [sortOrder, setSortOrder] = useState("ascending");

  const sortHealth = () => {
    const health = [...bots];
    if (sortOrder === "ascending") {
      health.sort((a, b) => a.health - b.health);
      setSortOrder("descending");
    } else {
      health.sort((a, b) => b.health - a.health);
      setSortOrder("ascending");
    }
    setBots(health);
  };

  const sortDamage = () => {
    const damage = [...bots];
    if (sortOrder === "ascending") {
      damage.sort((a, b) => a.damage - b.damage);
      setSortOrder("descending");
    } else {
      damage.sort((a, b) => b.damage - a.damage);
      setSortOrder("ascending");
    }
    setBots(damage);
  };

  const sortArmor = () => {
    const armor = [...bots];
    if (sortOrder === "ascending") {
      armor.sort((a, b) => a.armor - b.armor);
      setSortOrder("descending");
    } else {
      armor.sort((a, b) => b.armor - a.armor);
      setSortOrder("ascending");
    }
    setBots(armor);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        display: "flex",
        gap: "15px",
        marginLeft: "1420px",
      }}
    >
      <button className="btn btn-secondary" onClick={sortHealth}>
        Sort by Health
      </button>
      <button className="btn btn-secondary" onClick={sortDamage}>
        Sort by Damage
      </button>
      <button className="btn btn-secondary" onClick={sortArmor}>
        Sort by Armor
      </button>
    </div>
  );
}
