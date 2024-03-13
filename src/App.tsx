import React, { useState } from "react";
import "./App.css";
import LetterButton from "./LetterButton";
import WomenThroughoutHistory from "./WomenThroughoutHistory";
import { Women, Woman } from "./Women";
import GuessButton from "./GuessButton";
import BackspaceButton from "./BackspaceButton";
import { Alert, Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import herdle from "./herdle.jpg";

function App() {
  let [HistoricalWoman, UpdateWoman] = useState<Woman | null>(null);

  React.useEffect(() => {
    let WomanFromArray = Women[Math.floor(Math.random() * Women.length)];
    UpdateWoman(WomanFromArray);
  }, []);

  let [AnswerValue, UpdateAnswer] = useState<string[]>([]);
  let [PreviousGuesses, AddGuess] = useState<string[]>([]);
  let [showAlert, UpdateLengthAlert] = useState<boolean>(false);

  return (
    <div className="App">
      <img src={herdle} className="logo" alt="logo" />
      <header style={{ fontSize: "1.5rem" }}>
        Her-dle: A Wordle inspired game that celebrates women throughout
        history.
      </header>
      <br></br>
      Make up to 5 guesses for the name of the woman who said the following
      phrase:
      <br />
      <WomenThroughoutHistory
        woman={HistoricalWoman}
        prevguess={PreviousGuesses}
      />
      {AnswerValue}
      {showAlert ? (
        <Alert color="primary">
          Length of guess does not match underscore hint above.
        </Alert>
      ) : null}
      <br></br>
      <Card
        style={{
          width: "15rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">Previous Guesses</CardTitle>
          <Badge color="primary">
            Made Guesses Counter: {PreviousGuesses.length}{" "}
          </Badge>{" "}
          <br />
          <CardText>
            {/* https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript */}
            {PreviousGuesses.map((guess) => {
              if (HistoricalWoman != null) {
                const WomanName = HistoricalWoman.name.toUpperCase();
                return (
                  <div>
                    {guess.split("").map((letter) => {
                      if (WomanName.includes(letter)) {
                        return (
                          <div
                            style={{ display: "inline-block", color: "green" }}
                          >
                            {letter}
                          </div>
                        );
                      } else {
                        return (
                          <div
                            style={{ display: "inline-block", color: "black" }}
                          >
                            {letter}
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              }
            })}
          </CardText>
        </CardBody>
      </Card>
      {PreviousGuesses.length >= 5 ? null : (
        <div>
          <LetterButton
            letter="-"
            onClick={() => UpdateAnswer([...AnswerValue, "-"])}
          />
          <LetterButton
            letter="space"
            onClick={() => UpdateAnswer([...AnswerValue, " "])}
          />
          <LetterButton
            letter="A"
            onClick={() => UpdateAnswer([...AnswerValue, "A"])}
          />
          <LetterButton
            letter="B"
            onClick={() => UpdateAnswer([...AnswerValue, "B"])}
          />
          <LetterButton
            letter="C"
            onClick={() => UpdateAnswer([...AnswerValue, "C"])}
          />
          <LetterButton
            letter="D"
            onClick={() => UpdateAnswer([...AnswerValue, "D"])}
          />
          <LetterButton
            letter="E"
            onClick={() => UpdateAnswer([...AnswerValue, "E"])}
          />
          <LetterButton
            letter="F"
            onClick={() => UpdateAnswer([...AnswerValue, "F"])}
          />
          <LetterButton
            letter="G"
            onClick={() => UpdateAnswer([...AnswerValue, "G"])}
          />
          <LetterButton
            letter="H"
            onClick={() => UpdateAnswer([...AnswerValue, "H"])}
          />
          <LetterButton
            letter="I"
            onClick={() => UpdateAnswer([...AnswerValue, "I"])}
          />
          <LetterButton
            letter="J"
            onClick={() => UpdateAnswer([...AnswerValue, "J"])}
          />
          <LetterButton
            letter="K"
            onClick={() => UpdateAnswer([...AnswerValue, "K"])}
          />
          <LetterButton
            letter="L"
            onClick={() => UpdateAnswer([...AnswerValue, "L"])}
          />
          <LetterButton
            letter="M"
            onClick={() => UpdateAnswer([...AnswerValue, "M"])}
          />
          <LetterButton
            letter="N"
            onClick={() => UpdateAnswer([...AnswerValue, "N"])}
          />
          <LetterButton
            letter="O"
            onClick={() => UpdateAnswer([...AnswerValue, "O"])}
          />
          <br></br>
          <LetterButton
            letter="P"
            onClick={() => UpdateAnswer([...AnswerValue, "P"])}
          />
          <LetterButton
            letter="Q"
            onClick={() => UpdateAnswer([...AnswerValue, "Q"])}
          />
          <LetterButton
            letter="R"
            onClick={() => UpdateAnswer([...AnswerValue, "R"])}
          />
          <LetterButton
            letter="S"
            onClick={() => UpdateAnswer([...AnswerValue, "S"])}
          />
          <LetterButton
            letter="T"
            onClick={() => UpdateAnswer([...AnswerValue, "T"])}
          />
          <LetterButton
            letter="U"
            onClick={() => UpdateAnswer([...AnswerValue, "U"])}
          />
          <LetterButton
            letter="V"
            onClick={() => UpdateAnswer([...AnswerValue, "V"])}
          />
          <LetterButton
            letter="W"
            onClick={() => UpdateAnswer([...AnswerValue, "W"])}
          />
          <LetterButton
            letter="X"
            onClick={() => UpdateAnswer([...AnswerValue, "X"])}
          />
          <LetterButton
            letter="Y"
            onClick={() => UpdateAnswer([...AnswerValue, "Y"])}
          />
          <LetterButton
            letter="Z"
            onClick={() => UpdateAnswer([...AnswerValue, "Z"])}
          />
          {/* need to update this with a pop method */}
          <BackspaceButton
            message="Backspace"
            onClick={() => UpdateAnswer(AnswerValue.slice(0, -1))}
          />
          <br></br>

          <GuessButton
            message="Guess Name"
            onClick={() => {
              UpdateLengthAlert(false);
              if (HistoricalWoman != null) {
                if (AnswerValue.length == HistoricalWoman.name.length) {
                  AddGuess([...PreviousGuesses, AnswerValue.join("")]);
                  UpdateAnswer([]);
                } else {
                  UpdateLengthAlert(true);
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
