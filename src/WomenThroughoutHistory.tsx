import React from "react";
import { Woman } from "./Women";

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

interface WomenThroughoutHistoryProps {
  woman: Woman | null;
}

function WomenThroughoutHistory(props: WomenThroughoutHistoryProps) {
  if (props.woman !== null) {
    const WomanName = props.woman.name;
    let UnderscoreArray = [];
    for (let letter of WomanName) {
      if (letter !== " ") {
        UnderscoreArray.push("_");
      } else {
        UnderscoreArray.push(" ");
      }
    }

    return (
      <>
        "{props.woman.quote}"<br></br>
        {UnderscoreArray}
        <br></br>
      </>
    );
  } else {
    return null;
  }
}

export default WomenThroughoutHistory;
