import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Player({ Players, match }) {
  if (Players.loading) return <div>Loading...</div>;

  const playerName = match.params.name;
  const player = Players.players.filter(
    p => p.name.toLowerCase() === playerName.toLowerCase()
  );
  if (!player.length) {
    return (
      <div>
        Could not find: {playerName}{" "}
        <Link to="/players">Back to all Players</Link>
      </div>
    );
  }
  return (
    <div>
      Hello {playerName}. Here are your scores: {JSON.stringify(player)}
      <div>
        <Link to="/players">Back to all Players</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  Scores: state.Scores,
  Players: state.Players
});

export default connect(mapStateToProps)(Player);
