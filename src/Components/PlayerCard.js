import React from "react";
import { Link } from "react-router-dom";

function PlayerCard({
  player,
  guessedWinner,
  earnedBonusOU,
  earnedBonusOpp,
  selectedGameTeam
}) {
  let classes = "player";
  let points = 0;
  if (guessedWinner) {
    classes += " guessedWinner";
    points++;
  }
  if (earnedBonusOU) {
    classes += " earnedBonus";
    points++;
  }
  if (earnedBonusOpp) {
    classes += " earnedBonus";
    points++;
  }
  return (
    <div className={classes}>
      <div className="title">
        <Link to={"/players/" + player.name}>{player.name}</Link>
      </div>
      <div>
        Total Points:
        {player.totalScore}
      </div>
      {selectedGameTeam && points ? (
        <div>
          {points} for OU vs {selectedGameTeam}
        </div>
      ) : null}
    </div>
  );
}

export default PlayerCard;
