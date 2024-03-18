import React from "react";
import { Button } from "reactstrap";

interface LetterButtonProps {
  letter: string;
  onClick: () => void;
}

function LetterButton(props: LetterButtonProps) {
  return (
    <Button
      size="sm"
      className="letterbutton"
      type="button"
      onClick={props.onClick}
    >
      {props.letter}
    </Button>
  );
}

export default LetterButton;
