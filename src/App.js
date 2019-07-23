import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [scores, setScores] = useState([]);
  const playersApi = 'https://api.sheety.co/d50d6864-69d7-46b3-b39d-a4ea29480254';
  const scoresApi = 'https://api.sheety.co/63dbeee0-3aa4-4e79-ac39-545ac3ee7b86';
  useEffect(()=>{

    fetch(scoresApi).then(d=>d.json()).then(d=>{
      setScores(d);
    });
    fetch(playersApi).then(d=>d.json()).then(d=>{
      setPlayers(d);
    });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(scores)}
        </p>
        <p>
          {JSON.stringify(players)}
        </p>
      </header>
    </div>
  );
}

export default App;
