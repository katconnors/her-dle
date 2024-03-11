import React from "react";

interface GuessButtonProps {
  message: string;
  onClick: () => void;
}

function GuessButton(props: GuessButtonProps) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.message}{" "}
    </button>
  );
}

export default GuessButton;
