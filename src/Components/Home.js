import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Home({ Outcome }) {
  return (
    <div>
      <h2>Home</h2>
      {JSON.stringify(Outcome.outcome)}
      <div>
        <Link to="/scores">Scores</Link>
      </div>
      <div>
        <Link to="/players">Players</Link>
      </div>
      {/*JSON.stringify(Scores)*/}
    </div>
  );
}

const mapStateToProps = state => ({
  Scores: state.Scores,
  Players: state.Players,
  Outcome: state.Outcome
});

export default connect(mapStateToProps)(Home);
