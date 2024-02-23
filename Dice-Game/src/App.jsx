import styled from "styled-components";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
import { useState } from "react";

function App() {
  const[isGameStarted,setGameStarted]=useState(false);

  const toggle=()=>{
     setGameStarted((prev)=>!prev)
  }
  return (
    <>
      {isGameStarted ? <GamePlay/>:<StartGame toggle={toggle}/>}
    </>
  )
}

export default App
