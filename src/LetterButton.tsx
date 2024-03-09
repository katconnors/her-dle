import React from "react";

interface LetterButtonProps {
  letter: string;
  onClick: () => void;
}

function LetterButton(props: LetterButtonProps) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.letter}
    </button>
  );
}

export default LetterButton;
