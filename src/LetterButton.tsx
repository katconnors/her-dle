import React from "react";

interface LetterButtonProps {
  letter: string;
}

function LetterButton(props: LetterButtonProps) {
  return <button type="button">{props.letter}</button>;
}

export default LetterButton;
