import React from "react";
import Women from "./Women";

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

function WomenThroughoutHistory() {
  const WomanFromArray = Women[Math.floor(Math.random() * Women.length)];
  return <> {WomanFromArray.name} </>;
}

export default WomenThroughoutHistory;
