import {
  SCORES_LOADED,
  PLAYERS_LOADED,
  START_LOAD_PLAYERS,
  START_LOAD_SCORES
} from "../Actions/Types";

export default function PlayersReducer(
  state = { loadingPlayers: false, loadingScores: false },
  action
) {
  switch (action.type) {
    case START_LOAD_PLAYERS:
      return { ...state, loadingPlayers: true };
    case START_LOAD_SCORES:
      return { ...state, loadingScores: true };
    case SCORES_LOADED:
      state = {
        ...state,
        scores: action.scores,
        loadingScores: false
      };
      return computeIfReady(state, action);
    case PLAYERS_LOADED:
      state = {
        ...state,
        players: action.players,
        loadingPlayers: false
      };
      return computeIfReady(state, action);
    default:
      return state;
  }
}

const computeIfReady = state => {
  if (state.loadingPlayers || state.loadingScores) return state;

  let outcome = { todo: true };
  const { players, scores } = state;
  console.log("computing", players, scores);
  //compute here

  //foreach game
  //  closest = null;
  //  foreach player
  //    if(closest < thisGuy)
  //      //this is wrong =//closest = thisGuy

  for (let p of players) p.gameScores = {};

  for (let g of scores.filter(g => g.complete)) {
    let closest = { ou: 100, opp: 100 };
    g.ouWon = g.ouScore > g.oppScore;
    g.guessedWinner = [];
    g.closestOu = [];
    g.closestOpp = [];
    for (let p of players) {
      p.gameScores[g.id] = 0;
      let [p_ou, p_opp] = p[g.id].split("-");
      p.ouWon = parseInt(p_ou) > parseInt(p_opp);
      p.ou = Math.abs(g.ouScore - p_ou);
      p.opp = Math.abs(g.oppScore - p_opp);
      closest.ou = Math.min(closest.ou, p.ou);
      closest.opp = Math.min(closest.opp, p.opp);
      console.log(p.name, p.ou, p.opp, g.id, g.team);
    }
    for (let p of players) {
      let eligibleForClosest = false;
      if (p.ouWon === g.ouWon) {
        eligibleForClosest = true;
        g.guessedWinner.push(p.name);
        p.gameScores[g.id]++;
      }
      const allowAnyoneToWinClosest = false;
      if (allowAnyoneToWinClosest) {
        eligibleForClosest = true;
      }
      if (eligibleForClosest && p.ou === closest.ou) {
        g.closestOu.push(p.name);
        p.gameScores[g.id]++;
      }
      if (eligibleForClosest && p.opp === closest.opp) {
        g.closestOpp.push(p.name);
        p.gameScores[g.id]++;
      }
    }
  }
  return { ...state, outcome };
};
