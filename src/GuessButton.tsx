import React from "react";

interface GuessButtonProps {
  message: string;
}

function GuessButton(props: GuessButtonProps) {
  return <button type="button">{props.message}</button>;
}

export default GuessButton;
