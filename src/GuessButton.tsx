import React from "react";
import { Button } from "reactstrap";

interface GuessButtonProps {
  message: string;
  onClick: () => void;
}

function GuessButton(props: GuessButtonProps) {
  return (
    <Button className="guessbutton" type="button" onClick={props.onClick}>
      {props.message}{" "}
    </Button>
  );
}

export default GuessButton;
