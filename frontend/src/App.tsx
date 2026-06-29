import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [batsmen, setBatsmen] = useState<any[]>([]);
  const [bowlers, setBowlers] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/top-batsmen")
      .then((res) => setBatsmen(res.data))
      .catch((err) => console.log(err));

    axios.get("http://127.0.0.1:8000/top-bowlers")
      .then((res) => setBowlers(res.data))
      .catch((err) => console.log(err));

    axios.get("http://127.0.0.1:8000/top-teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">

      <nav className="navbar">
        <h1>🏏 AI Cricket Intelligence</h1>
      </nav>

      <section className="hero">
        <h2>IPL Analytics Dashboard</h2>
        <p>
          Analyze players, teams, matches and AI-generated cricket insights.
        </p>
      </section>

      <div className="cards">

        <div className="card">
          <h3>Top Batsmen</h3>

          {batsmen.slice(0, 5).map((player, index) => (
            <p key={index}>
              {player.batter} - {player.runs}
            </p>
          ))}
        </div>

        <div className="card">
          <h3>Top Bowlers</h3>

          {bowlers.slice(0, 5).map((player, index) => (
            <p key={index}>
              {player.bowler} - {player.wickets}
            </p>
          ))}
        </div>

        <div className="card">
          <h3>Top Teams</h3>

          {teams.slice(0, 5).map((team, index) => (
            <p key={index}>
              {team.team} - {team.wins}
            </p>
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;