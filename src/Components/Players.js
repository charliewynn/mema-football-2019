import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Players({Players, match}){

  if(Players.loading) return (<div>Loading...</div>);

  const playerName = match.params.name;
  if(playerName){
    const player = Players.players.filter(p=>p.name.toLowerCase() === playerName.toLowerCase());
    if(!player.length){
      return (<div>Could not find: {playerName} <Link to="/players">Back to all Players</Link></div>)
    }
    return (
      <div>Hello {playerName}. Here are your scores: {JSON.stringify(player)}</div>
    )

  }
  if(match.params.name) return (<div>Hello {}</div>)
    return (<div>players page<div>{JSON.stringify(Players)}</div></div>)
}

const mapStateToProps = (state) => ({
  Scores: state.Scores,
  Players: state.Players
});

export default connect(mapStateToProps)(Players);