import React from "react";

function Game({ game }) {
  return (
    <div className="game">
      <div className="title">
        <strong>
          OU
          {game.home ? " vs " : " @ "}
          {game.team}
        </strong>
      </div>
      <div>{game.date}</div>
      {game.complete && (
        <>
          <div>OU {game.ouWon ? "won" : "lost"}</div>
          <div>
            {game.ouScore} to {game.oppScore}
          </div>
          <div>Guessed Winner: {game.guessedWinner.join(", ")}</div>
          <div>Closest to OU score: {game.closestOu.join(", ")}</div>
          <div>Closest to Opp score: {game.closestOpp.join(", ")}</div>
        </>
      )}
      <button
        className="button button1"
        onClick={() =>
          window.open(
            "https://www.espn.com/college-football/game/_/gameId/" +
              game.espnGameId
          )
        }
      >
        ESPN
      </button>
    </div>
  );
}

export default Game;

//urls
//Houston: https://www.espn.com/college-football/game/_/gameId/401112114
//SDAK: https://www.espn.com/college-football/game/_/gameId/401112115
//UCLA: https://www.espn.com/college-football/game/_/gameId/401112116
//TTU: https://www.espn.com/college-football/game/_/gameId/401112117
//KU: https://www.espn.com/college-football/game/_/gameId/401112101
//TEX: https://www.espn.com/college-football/game/_/gameId/401112118
//WVU: https://www.espn.com/college-football/game/_/gameId/401112119
//KSU: https://www.espn.com/college-football/game/_/gameId/401112110
//ISU: https://www.espn.com/college-football/game/_/gameId/401112092
//BAY: https://www.espn.com/college-football/game/_/gameId/401112082
//TCU: https://www.espn.com/college-football/game/_/gameId/401112120
//OKST: https://www.espn.com/college-football/game/_/gameId/401112121
