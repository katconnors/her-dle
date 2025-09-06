import React, { useState, useRef } from "react";
import "./App.css";
import LetterButton from "./LetterButton";
import WomenThroughoutHistory from "./WomenThroughoutHistory";
import { Women, Woman } from "./Women";
import GuessButton from "./GuessButton";
import BackspaceButton from "./BackspaceButton";
import { Alert, Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import herdle from "./her-dlenew.png";
import Confetti from "react-confetti";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";

import GuessLogic from "./GuessLogic";
import Emoji from "./Emoji";

// Sources:
// https://www.npmjs.com/package/react-confetti?activeTab=readme
// https://www.npmjs.com/package/react-copy-to-clipboard

// height element resource:https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element
// https://stackoverflow.com/questions/61199316/why-is-ref-current-clientheight-always-possibly-null

// Date objects: https://howtodoinjava.com/typescript/typescript-date-object/
// https://www.basedash.com/blog/how-to-subtract-dates-in-typescript
// https://stackoverflow.com/questions/14980014/how-can-i-calculate-the-time-between-2-dates-in-typescript

// https://stackoverflow.com/questions/10428720/how-to-keep-indent-for-second-line-in-ordered-lists-via-css

function App() {
  const [HistoricalWoman, UpdateWoman] = useState<Woman | null>(null);

  const [IfCopied, UpdateCopied] = useState<boolean>(false);

  // note that this date is zero indexed for month
  const launchday = new Date(2024, 2, 18);

  const currentday = new Date();

  const daydifference = Math.floor(
    (currentday.getTime() - launchday.getTime()) / (1000 * 60 * 60 * 24)
  );

  React.useEffect(() => {
    const WomanFromArray = Women[daydifference % Women.length];
    UpdateWoman(WomanFromArray);
  }, []);

  const [AnswerValue, UpdateAnswer] = useState<string[]>([]);
  const [PreviousGuesses, AddGuess] = useState<string[]>([]);
  const [showAlert, UpdateLengthAlert] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string>("1");
  const toggle = (id: string) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <div ref={ref} className="App">
      <a href="https://her-dle.katrinaconnors.com/">
        <img src={herdle} className="logo" alt="logo" />
      </a>
      <header className="headertitle">
        Her-dle: A Wordle inspired game that celebrates women throughout history
      </header>
      <br />

      {HistoricalWoman != null &&
      HistoricalWoman.lastname.toUpperCase() ===
        PreviousGuesses[PreviousGuesses.length - 1] ? (
        <div className="successcopy">
          <div className="successtext">
            {" "}
            You figured out the name! Check back tomorrow for another puzzle.{" "}
          </div>
          {IfCopied ? (
            <Alert className="resultcopyalert"> Result copied </Alert>
          ) : null}
          <CopyToClipboard
            text={`Women's History Her-dle puzzle: ${
              PreviousGuesses.length
            }/5 ${Emoji(
              PreviousGuesses,
              HistoricalWoman.lastname.toUpperCase()
            )} \n Try solving it at https://her-dle.katrinaconnors.com/`}
          >
            <Card className="copyCard">
              Women's History Her-dle puzzle: {PreviousGuesses.length}/5
              {Emoji(
                PreviousGuesses,
                HistoricalWoman.lastname.toUpperCase()
              )}{" "}
              Try solving it at https://her-dle.katrinaconnors.com/
              <button onClick={() => UpdateCopied(true)}>
                {" "}
                Copy/share result{" "}
              </button>
            </Card>
          </CopyToClipboard>
          <br />
          <Confetti
            height={
              500 +
              (ref.current && ref.current.clientHeight
                ? ref.current.clientHeight
                : 0)
            }
            numberOfPieces={400}
            recycle={false}
          ></Confetti>
          <br />
        </div>
      ) : null}

      <WomenThroughoutHistory
        woman={HistoricalWoman}
        prevguess={PreviousGuesses}
        answer={AnswerValue}
      />
      <div>
        {showAlert ? (
          <Alert color="primary">
            Length of guess does not match the length hints above. Please modify
            your guess.
          </Alert>
        ) : null}{" "}
      </div>
      {/* <div className="answervalue"> {AnswerValue}</div> */}
      <div className="cardkeyboard">
        <div className="guidecards" style={{}}>
          <div>
            <Card
              style={{
                width: "200pt",
              }}
            >
              <CardBody>
                <CardTitle className="cardtitle" tag="h4">
                  Your Guesses
                </CardTitle>
                <Badge color="primary">
                  Guesses left: {5 - PreviousGuesses.length}{" "}
                </Badge>{" "}
                <br />
                <CardText>
                  {/* https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript */}
                  {PreviousGuesses.map((guess) => {
                    if (HistoricalWoman != null) {
                      const WomanName = HistoricalWoman.lastname.toUpperCase();
                      const colorArray = GuessLogic(guess, WomanName);
                      return (
                        <div>
                          {guess.split("").map((letter, i) => {
                            return (
                              <div
                                className="letterDisplay"
                                style={{
                                  display: "inline-block",
                                  backgroundColor: colorArray[i],
                                  color: "white",
                                }}
                              >
                                {letter}
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                  })}
                </CardText>
              </CardBody>
            </Card>
            <Accordion
              open={
                HistoricalWoman != null &&
                (PreviousGuesses.length === 5 ||
                  HistoricalWoman.lastname.toUpperCase() ===
                    PreviousGuesses[PreviousGuesses.length - 1])
                  ? ""
                  : open
              }
              toggle={toggle}
            >
              <AccordionItem>
                <AccordionHeader className="accordiontitle" targetId="1">
                  <div style={{ width: "100%" }}> How to Play</div>
                </AccordionHeader>
                <AccordionBody
                  className="accordiontext"
                  accordionId="1"
                  style={{ width: "200pt" }}
                >
                  <ol>
                    <li>
                      Guess the last name of the woman attributed with the shown
                      quote.
                    </li>

                    <li>
                      "Your Guesses" section will give you hints after a guess:
                      green background letters appear in the woman's name, in
                      that location.
                    </li>
                    <li>
                      Orange background letters appear in the woman's name in a
                      different location.
                    </li>
                    <li>
                      The woman's name is revealed after five guesses or a
                      success.
                    </li>
                    <li>Puzzles are changed daily, so check back!</li>
                  </ol>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>

          <br />
        </div>

        <div className="answerwithkeyboard">
          {/* < 
            onkeydown= () => UpdateAnswer([...AnswerValue, ""])}
            
            /> */}
          <br />
          {PreviousGuesses.length >= 5 ||
          HistoricalWoman == null ||
          HistoricalWoman.lastname.toUpperCase() ===
            PreviousGuesses[PreviousGuesses.length - 1] ? null : (
            <div className="keyboard">
              <div className="keyboardline">
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
                <BackspaceButton
                  message="←"
                  onClick={() => UpdateAnswer(AnswerValue.slice(0, -1))}
                />
              </div>

              <div className="keyboardline">
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
                  letter="'"
                  onClick={() => UpdateAnswer([...AnswerValue, "'"])}
                />
                <br />
              </div>
              <div className="keyboardline">
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
                <LetterButton
                  letter="-"
                  onClick={() => UpdateAnswer([...AnswerValue, "-"])}
                />

                <br></br>

                <GuessButton
                  message="Guess"
                  onClick={() => {
                    UpdateLengthAlert(false);
                    if (HistoricalWoman != null) {
                      if (
                        AnswerValue.length == HistoricalWoman.lastname.length
                      ) {
                        AddGuess([...PreviousGuesses, AnswerValue.join("")]);
                        UpdateAnswer([]);
                      } else {
                        UpdateLengthAlert(true);
                      }
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
