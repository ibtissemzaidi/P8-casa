import React from "react";
import "./Tag.scss";

const Tag = (props) => {
  return <span className="Tag">{props.children}</span>;
};

export default Tag;
