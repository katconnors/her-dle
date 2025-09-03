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
    let underscorelength = `${UnderscoreArray.length} letters`;
    let image = undefined;
    let attribution = "";
    let link = "";
    let linktext = "";

    if (
      props.prevguess.length === 5 ||
      props.woman.lastname.toUpperCase() ===
        props.prevguess[props.prevguess.length - 1]
    ) {
      lastname = props.woman.lastname;
      bio = props.woman.bio;
      image = props.woman.image;
      attribution = `Copyright: ${props.woman.attribution}`;
      link = props.woman.link;
      underscorelength = "";
      linktext = `Learn more about ${lastname} on Wikipedia`;
      <br />;
    }

    return (
      <div className="womanprops">
        "{props.woman.quote}"<br />
        {lastname || UnderscoreArray} <br />
        {underscorelength}
        <br />
        <div className="image-section">
          <div className="portrait">
            <img src={image} />
          </div>
          <div className="attribution"> {attribution}</div>
        </div>
        <br />
        <div className="biography">{bio}</div>
        <br />
        <a href={link} target="_blank">
          {linktext}
        </a>
        <br></br>
      </div>
    );
  } else {
    return null;
  }
}

export default WomenThroughoutHistory;
