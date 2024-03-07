import React from "react";
import Women from "./Women";

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

function WomenThroughoutHistory() {
  const WomanFromArray = Women[Math.floor(Math.random() * Women.length)];
  const WomanName = WomanFromArray.name;
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
      "{WomanFromArray.quote}"<br></br>
      {UnderscoreArray}
      <br></br>
    </>
  );
}

export default WomenThroughoutHistory;
