import React, { useState } from "react";
import { connect } from "react-redux";
import GameCard from "./GameCard";
import PlayerCard from "./PlayerCard";
import PredictionsTable from "./PredictionsTable";

function Home({ Outcome, Config }) {
  const [showScoresTable, showHideScores] = useState(Config.showTable);

  const playerClicked = player => {
    alert(JSON.stringify(player));
  };
  return (
    <div id="HomeDiv">
      <div id="GamesDiv">
        {Outcome.outcome.scores.map(game => (
          <GameCard
            key={game.id}
            showBonusWinners={Config.showBonusWinners}
            game={game}
          ></GameCard>
        ))}
      </div>
      <div id="PlayersDiv">
        {Outcome.outcome.players.map(player => (
          <PlayerCard
            playerClicked={playerClicked}
            key={player.name}
            player={player}
          ></PlayerCard>
        ))}
      </div>
      <button
        className="largeButton button2"
        onClick={() => showHideScores(!showScoresTable)}
      >
        Show/Hide Scores
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
