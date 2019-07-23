import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomeComponent from './Components/Home';
import ScoresComponent from './Components/Scores';
import PlayersComponent from './Components/Players';
import { connect } from 'react-redux';
import { LoadScoresAction } from "./Actions/ScoresActions";
import { LoadPlayersAction } from './Actions/PlayersActions';

function App({LoadScores, LoadPlayers}) {
  useEffect(()=>{
    LoadScores();
    LoadPlayers();
  },[LoadScores, LoadPlayers]);
  
  return (

    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header className="App-header">
          <Link className="HeaderLink" to="/">Mema Football Pool 2019</Link>
        </header>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/players" component={PlayersComponent}></Route>
          <Route exact path="/players/:name" render={()=><div>players2</div>}></Route>
          <Route exact path="/scores" component={ScoresComponent}></Route>
          <Route render={()=><div>404<div><Link to="/">Go Home</Link></div></div>}></Route>
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