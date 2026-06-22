import React, { useState } from "react";
import "./App.css";

function App() {
  const [bjp, setBjp] = useState(0);
  const [congress, setCongress] = useState(0);
  const [jds, setJds] = useState(0);

  return (
    <div className="app">
      <h1>Voting Application</h1>

      <div className="party">
        <span className="party-name">BJP</span>
        <button onClick={() => setBjp(bjp + 1)}>Vote</button>
        <span className="vote-count">{bjp}</span>
      </div>

      <div className="party">
        <span className="party-name">Congress</span>
        <button onClick={() => setCongress(congress + 1)}>Vote</button>
        <span className="vote-count">{congress}</span>
      </div>

      <div className="party">
        <span className="party-name">JDS</span>
        <button onClick={() => setJds(jds + 1)}>Vote</button>
        <span className="vote-count">{jds}</span>
      </div>
    </div>
  );
}

export default App;
