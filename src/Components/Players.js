import React from 'react';
import { connect } from 'react-redux';

function Players({Players}){

    return (<div>players page<div>{JSON.stringify(Players)}</div></div>)
}

const mapStateToProps = (state) => ({
  Scores: state.Scores,
  Players: state.Players
});

export default connect(mapStateToProps)(Players);