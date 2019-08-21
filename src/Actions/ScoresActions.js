import { START_LOAD_SCORES, SCORES_LOADED, SCORES_ERROR } from "./Types";

const scoresURL = "https://api.sheety.co/63dbeee0-3aa4-4e79-ac39-545ac3ee7b86";

export const StartLoadScores = () => ({
  type: START_LOAD_SCORES
});

export const ScoresLoaded = scores => ({
  type: SCORES_LOADED,
  scores
});

export const ScoresLoadingError = error => ({
  type: SCORES_ERROR,
  error
});

export const LoadScoresAction = () => {
  return async dispatch => {
    dispatch(StartLoadScores());
    try {
      const response = await fetch(scoresURL);
      const json = await response.json();
      dispatch(ScoresLoaded(json));
    } catch (error) {
      dispatch(ScoresLoadingError(error));
    }
  };
};
