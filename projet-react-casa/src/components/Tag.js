import React from "react";
import "./Tag.scss";

const Tag = (props) => {
  return (
    <div className="tag">
      <span className="tag_button">{props.nom}</span>
    </div>
  );
};

export default Tag;
