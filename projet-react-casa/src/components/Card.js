import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ image, title, id }) => {
  return (
    <div className="card">
      <Link to={`Logement/${id}`}>
        <img className="card_img" src={image} alt={title} />
        <h3 className="card_title">{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
