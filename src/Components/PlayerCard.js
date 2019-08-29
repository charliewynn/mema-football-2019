import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="player" onClick={() => alert("View " + player.name + "'s Scores")}>
      <div className="title">
        <strong>{player.name}</strong>
      </div>
      <div>
        Player Score: 
        {player.totalScore}
      </div>
    </div>
  );
}

export default PlayerCard;
