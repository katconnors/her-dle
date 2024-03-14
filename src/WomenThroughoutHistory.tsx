import React from "react";
import { Woman } from "./Women";

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

interface WomenThroughoutHistoryProps {
  woman: Woman | null;
  prevguess: string[];
}

function WomenThroughoutHistory(props: WomenThroughoutHistoryProps) {
  if (props.woman !== null) {
    const WomanName = props.woman.lastname;
    let UnderscoreArray = [];
    for (let letter of WomanName) {
      if (letter !== " ") {
        UnderscoreArray.push("_");
      } else {
        UnderscoreArray.push(" ");
      }
    }

    let lastname = "";
    let bio = "";

    if (
      props.prevguess.length === 5 ||
      props.woman.lastname.toUpperCase() ===
        props.prevguess[props.prevguess.length - 1]
    ) {
      lastname = props.woman.lastname;
      bio = props.woman.bio;
    }

    return (
      <div className="womanprops">
        "{props.woman.quote}"<br />
        {lastname || UnderscoreArray} <br />
        {UnderscoreArray.length} letters
        <br />
        {bio}
        <br />
      </div>
    );
  } else {
    return null;
  }
}

export default WomenThroughoutHistory;
