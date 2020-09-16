import { START_LOAD_PLAYERS, PLAYERS_LOADED } from "./Types";
import PlayerData from "../data/players.json";

//const scoresURL = "https://api.sheety.co/d50d6864-69d7-46b3-b39d-a4ea29480254";

export const StartLoadPlayers = () => ({
  type: START_LOAD_PLAYERS,
});

export const PlayersLoaded = (players) => ({
  type: PLAYERS_LOADED,
  players,
});

export const LoadPlayersAction = () => {
  return async (dispatch) => {
    dispatch(StartLoadPlayers());
    //const response = await fetch(scoresURL);
    //const json = await response.json();

    dispatch(PlayersLoaded(PlayerData.players));
  };
};
