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

  console.log("Outcome", Outcome);
  return (
    <div
      id="HomeDiv"
      onClick={() => {
        changeSelectedGame(null);
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: Config.announcement }}></div>
      {Outcome.outcome.scores.length === 0 && <div>Loading</div>}
      <div id="GamesDiv">
        {Outcome.outcome.scores.map((game) => (
          <GameCard
            selected={game === selectedGame}
            key={game.id}
            changeSelectedGame={(game) => {
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
      {selectedGame && (
        <div id="key">
          <div>
            <span id="extra-point-key" className="key"></span>Extra Point
          </div>
          <div>
            <span id="correct-guess-key" className="key"></span>Correct Guess
          </div>
        </div>
      )}
      <div id="PlayersDiv">
        {Outcome.outcome.players.map((player) => (
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

      {Outcome.outcome.scores.length > 0 && (
        <button
          className="largeButton button2"
          onClick={() => showHideScores(!showScoresTable)}
        >
          {showScoresTable ? "Hide" : "Show"} Scores Table
        </button>
      )}
      {Outcome.outcome.scores.length > 0 && showScoresTable && (
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

const mapStateToProps = (state) => ({
  Scores: state.Scores,
  Players: state.Players,
  Outcome: state.Outcome,
  Config: state.Config,
});

export default connect(mapStateToProps)(Home);
