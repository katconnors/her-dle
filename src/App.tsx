import React from "react";
import "./App.css";
import LetterButton from "./LetterButton";
import WomenThroughoutHistory from "./WomenThroughoutHistory";
import Women from "./Women";
import GuessButton from "./GuessButton";
import BackspaceButton from "./BackspaceButton";

function App() {
  return (
    <div className="App">
      <header>Her-dle: a game that celebrates women throughout history.</header>
      <br></br>
      <WomenThroughoutHistory />
      <br></br>
      <LetterButton letter="A" />
      <LetterButton letter="B" />
      <LetterButton letter="C" />
      <LetterButton letter="D" />
      <LetterButton letter="E" />
      <LetterButton letter="F" />
      <LetterButton letter="G" />
      <LetterButton letter="H" />
      <LetterButton letter="I" />
      <LetterButton letter="J" />
      <LetterButton letter="K" />
      <LetterButton letter="L" />
      <LetterButton letter="M" />
      <LetterButton letter="N" />
      <LetterButton letter="O" />
      <br></br>
      <LetterButton letter="P" />

      <LetterButton letter="Q" />
      <LetterButton letter="R" />
      <LetterButton letter="S" />
      <LetterButton letter="T" />
      <LetterButton letter="U" />
      <LetterButton letter="V" />
      <LetterButton letter="W" />
      <LetterButton letter="X" />
      <LetterButton letter="Y" />
      <LetterButton letter="Z" />
      <BackspaceButton message="Backspace" />
      <br></br>
      <GuessButton message="Guess name" />
    </div>
  );
}

export default App;
