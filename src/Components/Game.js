import React from "react";

function Game({ game }) {
  return (
    <div className="game">
      <div className="title">
        OU
        {game.home ? " vs " : " @ "}
        {game.team}
      </div>
      <div>{game.date}</div>
      <div>{JSON.stringify(game.ouWon)}</div>
      {game.complete && (
        <>
          <div>
            {game.ouScore} to {game.oppScore}
          </div>
          <div>Guessed Winner: {game.guessedWinner.join(" ")}</div>
          <div>Closest to OU score: {game.closestOu.join(" ")}</div>
          <div>Closest to Opp score: {game.closestOpp.join(" ")}</div>
        </>
      )}
    </div>
  );
}

export default Game;
