import React from "react";

export default ({ players, games }) => (
  <table id="scoresTable" class="hidden">
    {GetTableHeaders(games)}
    {GetPlayerPredictions(players)}
  </table>
);

const GetTableHeaders = games => (
  <tr>
    <th>Player</th>
    {games.map(g => (
      <th>{g.team}</th>
    ))}
  </tr>
);

const GetPlayerPredictions = players =>
  players.map(p => (
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
  ));
