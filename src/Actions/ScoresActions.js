import { START_LOAD_SCORES, SCORES_LOADED } from "./Types";

const scoresURL = 'https://api.sheety.co/63dbeee0-3aa4-4e79-ac39-545ac3ee7b86';

export const StartLoadScores = ()=>({
    type:START_LOAD_SCORES,
});

export const ScoresLoaded = scores => ({
    type:SCORES_LOADED,
    scores
});

export const LoadScoresAction = ()=>{
    return async (dispatch) =>{
        
        dispatch(StartLoadScores());
        const response = await fetch(scoresURL);
        const json = await response.json();
        console.log("Got Scores", json);
        dispatch(ScoresLoaded(json));
    }
}