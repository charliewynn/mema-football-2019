import React from "react";

function PlayerCard({ player, playerClicked }) {
  return (
    <div className="player" onClick={() => playerClicked(player)}>
      <div className="title">
        <strong>{player.name}</strong>
      </div>
      <div>
        Points: 
        {player.totalScore}
      </div>
    </div>
  );
}

export default PlayerCard;
