import React from "react";

export default ({ players, games }) => (
  <table align="center">
    <thead>{GetTableHeaders(games)}</thead>
    <tbody>{GetPlayerPredictions(players)}</tbody>
  </table>
);

const GetTableHeaders = (games) => (
  <tr>
    <th>Player</th>
    {games.map((g) => (
      <th key={g.team}>{g.team}</th>
    ))}
  </tr>
);

const GetPlayerPredictions = (players) =>
  players.map((p) => (
    <tr key={p.name}>
      <td>{p.name}</td>
      <td>{p.MOST}</td>
      <td>{p.KSU}</td>
      <td>{p.ISU}</td>
      <td>{p.TEX}</td>
      <td>{p.TCU}</td>
      <td>{p.TTU}</td>
      <td>{p.KU}</td>
      <td>{p.OKST}</td>
      <td>{p.WVU}</td>
      <td>{p.BAY}</td>
    </tr>
  ));
