import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="game">
      <div className="title">
        OU
        {player.home ? " vs " : " @ "}
        {player.team}
      </div>
      <div>{player.date}</div>
      <div>{JSON.stringify(player.ouWon)}</div>
      {player.complete && (
        <>
          <div>
            {player.ouScore} to {player.oppScore}
          </div>
          <div>Guessed Winner: {player.guessedWinner.join(" ")}</div>
          <div>Closest to OU score: {player.closestOu.join(" ")}</div>
          <div>Closest to Opp score: {player.closestOpp.join(" ")}</div>
        </>
      )}
    </div>
  );
}

export default PlayerCard;
