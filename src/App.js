import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Scores from './Components/Scores';
import { connect } from 'react-redux';
import { LoadScoresAction } from "./Actions/ScoresActions";

function App({LoadScores, Scores}) {
  const [players, setPlayers] = useState([]);
  const playersApi = 'https://api.sheety.co/d50d6864-69d7-46b3-b39d-a4ea29480254';
  useEffect(()=>{
    LoadScores();

    fetch(playersApi).then(d=>d.json()).then(d=>{
      setPlayers(d);
    });
  },[]);
  
  return (

    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(Scores)}
        </p>
        <p>
          {JSON.stringify(players)}
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

const mapStateToProps = (state,ownProps) => {
 
  console.log("Mapping state", state)
  return {
  Scores: state.Scores
}};

const mapDispatchToProps = dispatch => {
  return {
    LoadScores: () =>
      dispatch(LoadScoresAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
