import React from "react";

function PlayerCard({
  player,
  playerClicked,
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
    <div className={classes} onClick={() => playerClicked(player)}>
      <div className="title">
        <strong>{player.name}</strong>
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
