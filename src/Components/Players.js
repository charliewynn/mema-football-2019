import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Players({Players}){

  if(Players.loading) return (<div>Loading...</div>);

  return (
    <div>
      {Players.players.map(p=>(
        <div><Link to={"/players/"+p.name}>{p.name}</Link></div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  Scores: state.Scores,
  Players: state.Players
});

export default connect(mapStateToProps)(Players);