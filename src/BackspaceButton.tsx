import React from "react";

interface BackspaceButtonProps {
  message: string;
}

function BackspaceButton(props: BackspaceButtonProps) {
  return <button type="button">{props.message}</button>;
}

export default BackspaceButton;
