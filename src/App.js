import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomeComponent from './Components/Home';
import ScoresComponent from './Components/Scores';
import { connect } from 'react-redux';
import { LoadScoresAction } from "./Actions/ScoresActions";
import { LoadPlayersAction } from './Actions/PlayersActions';

function App({LoadScores, Scores, LoadPlayers, Players}) {
  useEffect(()=>{
    LoadScores();
    LoadPlayers();
  },[]);
  console.log("url", process.env.PUBLIC_URL);
  
  return (

    <div className="App">
      <header className="App-header">
        Mema Football Pool 2019
      </header>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/players" render={()=><div>players</div>}></Route>
          <Route exact path="/players/:name" render={()=><div>players2</div>}></Route>
          <Route exact path="/scores" component={ScoresComponent}></Route>
        </Switch>
      </BrowserRouter>
        <p>
          {JSON.stringify(Players)}
        </p>
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
