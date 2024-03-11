import React from "react";
import { Woman } from "./Women";

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

interface WomenThroughoutHistoryProps {
  woman: Woman | null;
  prevguess: string[];
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

    let name = "";
    let bio = "";
    if (props.prevguess.length === 5) {
      name = props.woman.name;
      bio = props.woman.bio;
    }

    return (
      <>
        "{props.woman.quote}"<br />
        {name || UnderscoreArray} <br />
        {bio}
        <br />
      </>
    );
  } else {
    return null;
  }
}

export default WomenThroughoutHistory;
