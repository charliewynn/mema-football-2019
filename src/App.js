import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Scores from './Components/Scores';
import { connect } from 'react-redux';
import { LoadScoresAction } from "./Actions/ScoresActions";
import { LoadPlayersAction } from './Actions/PlayersActions';

function App({LoadScores, Scores, LoadPlayers, Players}) {
  useEffect(()=>{
    LoadScores();
    LoadPlayers();
  },[]);
  
  return (

    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(Scores)}
        </p>
        <p>
          {JSON.stringify(Players)}
        </p>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={()=><div>home</div>}></Route>
          <Route exact path="/players" render={()=><div>players</div>}></Route>
          <Route exact path="/players/:name" render={()=><div>players2</div>}></Route>
          <Route exact path="/scores" component={Scores}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state,ownProps) => ({
  Scores: state.Scores,
  Players: state.Players
});

const mapDispatchToProps = dispatch => {
  return {
    LoadScores: () => dispatch(LoadScoresAction()),
    LoadPlayers: () => dispatch(LoadPlayersAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
