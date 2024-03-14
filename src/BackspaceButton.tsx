import React from "react";

interface BackspaceButtonProps {
  message: string;
  onClick: () => void;
}

function BackspaceButton(props: BackspaceButtonProps) {
  return (
    <button className="backspacebutton" type="button" onClick={props.onClick}>
      {props.message}
    </button>
  );
}

export default BackspaceButton;
