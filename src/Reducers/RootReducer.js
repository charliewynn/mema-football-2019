import { combineReducers } from "redux";
import Scores from "./ScoresReducer";
import Players from "./PlayersReducer";
import Outcome from "./OutcomeReducer";

export default combineReducers({ Scores, Players, Outcome });
