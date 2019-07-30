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
  return { ...state, outcome };
};
