import { combineReducers } from "redux";
import Scores from "./ScoresReducer";
import Players from "./PlayersReducer";
import Outcome from "./OutcomeReducer";

const Config = (state = {}) => state;
export default combineReducers({ Scores, Players, Outcome, Config });
