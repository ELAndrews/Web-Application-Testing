import React, { useState } from "react";
// import count from "../Helpers/resetCounter";

export default function Dashboard(props) {
  // const handleClick = () => {
  //     count(e.target.name, 1)

  // }

  function handleStrike() {
    props.setStrikes(s => s + 1);
  }
  function handleBalls(e) {
    props.setBalls(s => s + 1);
    console.log(e.target.name);
  }
  function handleFoul(e) {
    if (props.strikes < 2) {
      props.setStrikes(s => s + 1);
    } else {
      alert("Strikes already at 2, foul not counted");
    }
  }

  function handleHit() {
    props.setBalls(0);
    props.setStrikes(0);
  }

  return (
    <div>
      <button name="strike" onClick={handleStrike}>
        Strike
      </button>
      <button onClick={handleBalls}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  );
}
