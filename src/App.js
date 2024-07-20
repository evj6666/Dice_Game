import React from "react";
import { useState } from "react";
import GamePLay from "./Components/GamePLay";
import StartGame from "./Components/StartGame";

export default function App() {
  let [isGameStarted, setIsGameStarted] = useState(true);
  function toggleGame() {
    setIsGameStarted(prev => !prev)
  }
  return (
    <>
      {isGameStarted ? <StartGame toggleGame={toggleGame} /> : <GamePLay />}
    </>
  )
}
