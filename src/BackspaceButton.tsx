import React from "react";
import { Button } from "reactstrap";

interface BackspaceButtonProps {
  message: string;
  onClick: () => void;
}

function BackspaceButton(props: BackspaceButtonProps) {
  return (
    <Button className="backspacebutton" type="button" onClick={props.onClick}>
      {props.message}
    </Button>
  );
}

export default BackspaceButton;
