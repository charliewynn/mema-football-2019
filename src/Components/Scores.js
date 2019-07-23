import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

function Scores({Scores}){

    return (<div>scores page<div>{JSON.stringify(Scores)}</div></div>)
}

const mapStateToProps = (state) => ({
  Scores: state.Scores,
  Players: state.Players
});

export default connect(mapStateToProps)(Scores);