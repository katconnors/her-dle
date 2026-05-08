import React from "react";
import { Button } from "reactstrap";

interface LetterButtonProps {
  letter: string;
  onClick: () => void;
  disabled?: boolean;
}

function LetterButton(props: LetterButtonProps) {
  return (
    <Button
      size="sm"
      className="letterbutton"
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.letter}
    </Button>
  );
}

export default LetterButton;
