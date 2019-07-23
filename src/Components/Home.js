import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Home(){

    return (<div>
        <h2>Home</h2>
        <Link to="/scores">Scores</Link>
    </div>)
}

const mapStateToProps = (state) => ({
  Scores: state.Scores,
  Players: state.Players
});

export default connect(mapStateToProps)(Home);