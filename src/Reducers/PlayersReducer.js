import { START_LOAD_PLAYERS, PLAYERS_LOADED } from "../Actions/Types";

export default function PlayersReducer(state = { players:[], loading: false }, action) {
  switch (action.type) {
    case START_LOAD_PLAYERS:
      return {loading:true};
    case PLAYERS_LOADED:
      return {players: action.players, loading:false};
    default:
      return state;
  }
}
