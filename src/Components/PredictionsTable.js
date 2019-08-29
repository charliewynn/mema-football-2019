import React from "react";

function PredictionsTable({ players, games }) {
  var headers = GetTableHeaders(games);
  var rows = GetPlayerPredictions(players);

  return (
    <table align="center">
      {headers}
      {rows}
    </table>
  );
}

function GetTableHeaders(games)
{
  var headers = 
  <tr>
    <th>Player</th>
    <th>Game1</th>
    <th>Game2</th>
    <th>Game3</th>
    <th>Game4</th>
    <th>Game5</th>
    <th>Game6</th>
    <th>Game7</th>
    <th>Game8</th>
    <th>Game9</th>
    <th>Game10</th>
    <th>Game11</th>
    <th>Game12</th>
  </tr>
  if (games.length !== 0)
  {
    headers = 
    <tr>
      <th>Player</th>
      <th>{games[0].team}</th>
      <th>{games[1].team}</th>
      <th>{games[2].team}</th>
      <th>{games[3].team}</th>
      <th>{games[4].team}</th>
      <th>{games[5].team}</th>
      <th>{games[6].team}</th>
      <th>{games[7].team}</th>
      <th>{games[8].team}</th>
      <th>{games[9].team}</th>
      <th>{games[10].team}</th>
      <th>{games[11].team}</th>
    </tr>
  }
  return headers;
}

function GetPlayerPredictions(players)
{
  var rows = [];
  players.forEach(function(p)
  {
    rows.push(
      <tr> 
        <td>{p.name}</td>
        <td>{p.houston}</td>
        <td>{p.southDakota}</td>
        <td>{p.ucla}</td>
        <td>{p.texasTech}</td>
        <td>{p.kansas}</td>
        <td>{p.texas}</td>
        <td>{p.westVirginia}</td>
        <td>{p.kansasState}</td>
        <td>{p.iowaState}</td>
        <td>{p.baylor}</td>
        <td>{p.tcu}</td>
        <td>{p.osu}</td>
      </tr>
    )
  });
  return rows;
}

export default PredictionsTable;
