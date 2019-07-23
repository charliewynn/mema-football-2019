import { combineReducers } from 'redux';
import Scores from "./ScoresReducer";
import Players from "./PlayersReducer";

export default combineReducers({ Scores, Players });
