import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Game from "./Game";

function Home({ Outcome }) {
  return (
    <div>
      {Outcome.outcome.scores.map(game => (
        <Game key={game.id} game={game}></Game>
      ))}
      <div>
        <Link to="/scores">Scores</Link>
      </div>
      <div>
        <Link to="/players">Players</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  Scores: state.Scores,
  Players: state.Players,
  Outcome: state.Outcome
});

export default connect(mapStateToProps)(Home);
