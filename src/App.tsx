import React, { useState } from "react";
import "./App.css";
import LetterButton from "./LetterButton";
import WomenThroughoutHistory from "./WomenThroughoutHistory";
import { Women, Woman } from "./Women";
import GuessButton from "./GuessButton";
import BackspaceButton from "./BackspaceButton";
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap";
import herdle from "./herdle.jpg";
import RefreshButton from "./RefreshButton";

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
      <header className="headertitle">
        Her-dle: A Wordle inspired game that celebrates women throughout
        history.
      </header>
      <br />
      <RefreshButton
        message="New game/reload page"
        onClick={() => window.location.reload()}
      ></RefreshButton>{" "}
      <br />
      <br />
      {HistoricalWoman != null &&
      HistoricalWoman.lastname.toUpperCase() ===
        PreviousGuesses[PreviousGuesses.length - 1] ? (
        <div className="successtext">
          {" "}
          You figured out the name! Press button above to play again. <br />
          <br />
        </div>
      ) : null}
      <WomenThroughoutHistory
        woman={HistoricalWoman}
        prevguess={PreviousGuesses}
      />
      {showAlert ? (
        <Alert color="primary">
          Length of guess does not match underscore hint above.
        </Alert>
      ) : null}
      <br></br>
      <Card
        style={{
          width: "180pt",
        }}
      >
        <CardBody>
          <CardTitle tag="h4">How To Play</CardTitle>
          <CardText>
            -You have 5 guesses until the woman's name is revealed <br />{" "}
            -Letters that are green/underlined in Previous Guesses appear in the
            name
          </CardText>
        </CardBody>
      </Card>
      <Card
        style={{
          width: "180pt",
        }}
      >
        <CardBody>
          <CardTitle tag="h4">Previous Guesses</CardTitle>
          <Badge color="primary">
            Made Guesses Counter: {PreviousGuesses.length}{" "}
          </Badge>{" "}
          <br />
          <CardText>
            {/* https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript */}
            {PreviousGuesses.map((guess) => {
              if (HistoricalWoman != null) {
                const WomanName = HistoricalWoman.lastname.toUpperCase();
                return (
                  <div>
                    {guess.split("").map((letter) => {
                      if (WomanName.includes(letter)) {
                        return (
                          <div
                            style={{
                              display: "inline-block",
                              color: "green",
                              textDecorationLine: "underline",
                            }}
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
      <br />
      <div className="answervalue"> {AnswerValue}</div> <br />
      {PreviousGuesses.length >= 5 ||
      HistoricalWoman == null ||
      HistoricalWoman.lastname.toUpperCase() ===
        PreviousGuesses[PreviousGuesses.length - 1] ? null : (
        <div>
          <LetterButton
            letter="-"
            onClick={() => UpdateAnswer([...AnswerValue, "-"])}
          />
          <LetterButton
            letter="'"
            onClick={() => UpdateAnswer([...AnswerValue, "'"])}
          />

          <LetterButton
            letter="Q"
            onClick={() => UpdateAnswer([...AnswerValue, "Q"])}
          />

          <LetterButton
            letter="W"
            onClick={() => UpdateAnswer([...AnswerValue, "W"])}
          />

          <LetterButton
            letter="E"
            onClick={() => UpdateAnswer([...AnswerValue, "E"])}
          />
          <LetterButton
            letter="R"
            onClick={() => UpdateAnswer([...AnswerValue, "R"])}
          />
          <LetterButton
            letter="T"
            onClick={() => UpdateAnswer([...AnswerValue, "T"])}
          />
          <LetterButton
            letter="Y"
            onClick={() => UpdateAnswer([...AnswerValue, "Y"])}
          />
          <LetterButton
            letter="U"
            onClick={() => UpdateAnswer([...AnswerValue, "U"])}
          />
          <LetterButton
            letter="I"
            onClick={() => UpdateAnswer([...AnswerValue, "I"])}
          />
          <LetterButton
            letter="O"
            onClick={() => UpdateAnswer([...AnswerValue, "O"])}
          />
          <LetterButton
            letter="P"
            onClick={() => UpdateAnswer([...AnswerValue, "P"])}
          />
          <LetterButton
            letter="A"
            onClick={() => UpdateAnswer([...AnswerValue, "A"])}
          />
          <LetterButton
            letter="S"
            onClick={() => UpdateAnswer([...AnswerValue, "S"])}
          />
          <LetterButton
            letter="D"
            onClick={() => UpdateAnswer([...AnswerValue, "D"])}
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
            letter="Z"
            onClick={() => UpdateAnswer([...AnswerValue, "Z"])}
          />
          <LetterButton
            letter="X"
            onClick={() => UpdateAnswer([...AnswerValue, "X"])}
          />
          <LetterButton
            letter="C"
            onClick={() => UpdateAnswer([...AnswerValue, "C"])}
          />
          <LetterButton
            letter="V"
            onClick={() => UpdateAnswer([...AnswerValue, "V"])}
          />

          <LetterButton
            letter="B"
            onClick={() => UpdateAnswer([...AnswerValue, "B"])}
          />
          <LetterButton
            letter="N"
            onClick={() => UpdateAnswer([...AnswerValue, "N"])}
          />
          <LetterButton
            letter="M"
            onClick={() => UpdateAnswer([...AnswerValue, "M"])}
          />

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
                if (AnswerValue.length == HistoricalWoman.lastname.length) {
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
