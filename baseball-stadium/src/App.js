import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";
import useCount from "./Helpers/useCount";

function App() {
  const [balls, setBalls] = useCount(0, 1, 4);
  const [strikes, setStrikes] = useCount(0, 1, 3);

  if (balls > 4 || strikes > 3) {
    setBalls();
    setStrikes();
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
      />
    </div>
  );
}

export default App;
