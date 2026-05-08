import React, { useEffect, useState } from "react";
import { Woman } from "./Women";

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

interface WomenThroughoutHistoryProps {
  woman: Woman | null;
  prevguess: string[];
  answer: string[];
}

function WomenThroughoutHistory(props: WomenThroughoutHistoryProps) {
  const [imageError, setImageError] = useState(false);

  const isRevealed =
    props.woman !== null &&
    (props.prevguess.length === 5 ||
      props.woman.lastname.toUpperCase() ===
        props.prevguess[props.prevguess.length - 1]);

  useEffect(() => {
    if (isRevealed) {
      setImageError(false);
    }
  }, [isRevealed, props.woman]);

  if (props.woman !== null) {
    const WomanName = props.woman.lastname;
    let UnderscoreArray = [];
    let NameLength = WomanName.length;
    for (let i = 0; i < Math.max(NameLength, props.answer.length); i++) {
      if (props.answer[i]) {
        UnderscoreArray.push(props.answer[i]);
      } else {
        UnderscoreArray.push("_");
      }
    }

    let lastname = "";
    let bio = "";
    let underscorelength = `${WomanName.length} letters`;
    let image = undefined;
    let attribution = "";
    let link = "";
    let linktext = "";

    if (isRevealed) {
      lastname = props.woman.lastname;
      bio = props.woman.bio;
      image = props.woman.image;
      attribution = `Copyright: ${props.woman.attribution}`;
      link = props.woman.link;
      underscorelength = "";
      linktext = `Learn more about ${lastname} on Wikipedia`;
    }

    return (
      <div className="womanprops">
        "{props.woman.quote}"<br />
        {UnderscoreArray} <br />
        {underscorelength}
        <br />
        <div className="image-section">
          {!imageError && image && (
            <div className="portrait">
              <img
                src={image}
                onError={() => setImageError(true)}
                onLoad={() => setImageError(false)}
                alt={`Portrait of ${lastname}`}
              />
            </div>
          )}
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
