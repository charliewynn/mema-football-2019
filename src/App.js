import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import HomeComponent from "./Components/Home";
import ScoresComponent from "./Components/Scores";
import PlayersComponent from "./Components/Players";
import PlayerComponent from "./Components/Player";
import { connect } from "react-redux";
import { LoadScoresAction } from "./Actions/ScoresActions";
import { LoadPlayersAction } from "./Actions/PlayersActions";

function App({ LoadScores, LoadPlayers }) {
  useEffect(() => {
    LoadScores();
    LoadPlayers();
  }, [LoadScores, LoadPlayers]);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <header className="App-header">
          <Link className="HeaderLink" to="/">
            Mema Football Pool 2019
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/players" component={PlayersComponent} />
          <Route exact path="/players/:name" component={PlayerComponent} />
          <Route exact path="/scores" component={ScoresComponent} />
          <Route
            render={() => (
              <div>
                404
                <div>
                  <Link to="/">Go Home</Link>
                </div>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    LoadScores: () => dispatch(LoadScoresAction()),
    LoadPlayers: () => dispatch(LoadPlayersAction())
  };
};
export default connect(
  undefined,
  mapDispatchToProps
)(App);
