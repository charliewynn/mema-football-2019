import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Player({ Players, Scores, match }) {
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
      <h1>Here are {playerName}'s scores</h1>
      {Scores.scores && (
        <div className="scores">
          {Scores.scores.map(g => (
            <div className="score">
              <div>{g.team}</div>
              <div>{player[0][g.id]}</div>
            </div>
          ))}
        </div>
      )}
      <Link to="/">Back to all Players</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  Scores: state.Scores,
  Players: state.Players
});

export default connect(mapStateToProps)(Player);
