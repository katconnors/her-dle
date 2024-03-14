import React from "react";

interface RefreshButtonProps {
  message: string;
  onClick: () => void;
}

function RefreshButton(props: RefreshButtonProps) {
  return (
    <button className="refreshbutton" type="button" onClick={props.onClick}>
      {props.message}
    </button>
  );
}

export default RefreshButton;
