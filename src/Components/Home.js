import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <br></br>
      <div id="GamesDiv">
        {Outcome.outcome.scores.map(game => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </div>
      <br></br>
      <div id="PlayersDiv">
        {Outcome.outcome.players.map(player => (
          <PlayerCard
            playerClicked={playerClicked}
            key={player.name}
            player={player}
          ></PlayerCard>
        ))}
      </div>
      <br></br>
      <button
        class="largeButton button2"
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

function showHideScores() {
  var x = document.getElementById("scoresTable");
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
  }
}

const mapStateToProps = state => ({
  Scores: state.Scores,
  Players: state.Players,
  Outcome: state.Outcome,
  Config: state.Config
});

export default connect(mapStateToProps)(Home);
