import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const score = props.score;
  const maxScore = 5;
  return (
    <div className="srtar_container">
      {Array.from({ length: maxScore }, (_, index) => (
        <FontAwesomeIcon
          icone={faStar}
          className={score >= index + 1 ? "star_red" : "star"}
          key={index + 1}
        />
      ))}
    </div>
  );
};
