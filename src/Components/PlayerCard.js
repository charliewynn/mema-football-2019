import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="game">
      <div className="title">
        {player.name}
      </div>
      <div className="title">
        Player Score: 
        {player.totalScore}
      </div>
    </div>
  );
}

export default PlayerCard;