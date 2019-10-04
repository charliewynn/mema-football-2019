import React, { useState } from "react";
import { connect } from "react-redux";
import GameCard from "./GameCard";
import PlayerCard from "./PlayerCard";
import PredictionsTable from "./PredictionsTable";

function Home({ Outcome, Config }) {
  if (Config.debug) {
    //console.log("Loading Home in debug mode");
  }
  const [showScoresTable, showHideScores] = useState(Config.showTable);
  const [selectedGame, changeSelectedGame] = useState(null);

  return (
    <div
      id="HomeDiv"
      onClick={() => {
        changeSelectedGame(null);
      }}
    >
      <h1>{Config.announcement}</h1>
      <div id="GamesDiv">
        {Outcome.outcome.scores.map(game => (
          <GameCard
            selected={game === selectedGame}
            key={game.id}
            changeSelectedGame={game => {
              game === selectedGame
                ? changeSelectedGame(null)
                : changeSelectedGame(game);
            }}
            bonusWinnerText={Config.bonusWinnerText}
            showBonusWinners={Config.showBonusWinners}
            game={game}
          ></GameCard>
        ))}
      </div>
      <div id="PlayersDiv">
        {Outcome.outcome.players.map(player => (
          <PlayerCard
            selectedGameTeam={selectedGame && selectedGame.team}
            guessedWinner={
              selectedGame && selectedGame.guessedWinner.includes(player.name)
            }
            earnedBonusOpp={
              selectedGame && selectedGame.closestOpp.includes(player.name)
            }
            earnedBonusOU={
              selectedGame && selectedGame.closestOu.includes(player.name)
            }
            key={player.name}
            player={player}
          ></PlayerCard>
        ))}
      </div>
      <button
        className="largeButton button2"
        onClick={() => showHideScores(!showScoresTable)}
      >
        {showScoresTable ? "Hide" : "Show"} Scores Table
      </button>
      {showScoresTable && (
        <div id="ScoresDiv">
          <PredictionsTable
            players={Outcome.outcome.players}
            games={Outcome.outcome.scores}
          ></PredictionsTable>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  Scores: state.Scores,
  Players: state.Players,
  Outcome: state.Outcome,
  Config: state.Config
});

export default connect(mapStateToProps)(Home);
