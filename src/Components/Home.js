import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Game from "./Game";
import PlayerCard from "./PlayerCard";
import PredictionsTable from "./PredictionsTable";

function Home({ Outcome, Config }) {
  const playerClicked = player => {
    alert(JSON.stringify(player));
  };
  return (
    <div id="HomeDiv">
      <br></br>
      <div id="GamesDiv">
        {Outcome.outcome.scores.map(game => (
          <Game key={game.id} game={game}></Game>
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
      {Config.showTable && (
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
