import { START_LOAD_SCORES, SCORES_LOADED } from '../Actions/Types';

export default function ScoresReducer(state = { scores:[], loading: false }, action) {
  switch (action.type) {
    case START_LOAD_SCORES:
      return {loading:true};
    case SCORES_LOADED:
      return {scores: action.scores, loading:false};
    default:
      return state;
  }
}
