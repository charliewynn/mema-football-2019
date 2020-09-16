import { START_LOAD_PLAYERS, PLAYERS_LOADED } from "../Actions/Types";

export default function PlayersReducer(
  state = { players: [], loading: false },
  action
) {
  //console.log("PlayersReducer", action);
  switch (action.type) {
    case START_LOAD_PLAYERS:
      return { loading: true };
    case PLAYERS_LOADED:
      console.log("Loaded Players", action.players);
      return { players: action.players, loading: false };
    default:
      return state;
  }
}
