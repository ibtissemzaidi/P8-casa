import React from "react";
import StarActive from "../../assets/star-active.png";
import StarInactive from "../../assets/star-inactive.png";
import "./Rating.scss";

// Composant Rating > affiche les étoiles en fonction de la note
// Props : rating (note de 1 à 5)

const Rating = ({ rating }) => {
  const stars = []; // Creer un tableau pour stocker les étoiles
  for (let i = 1; i <= 5; i++) {
    // Boucle pour afficher les étoiles
    if (i <= rating) {
      // Tant que i est inférieur ou égal à la note
      stars.push(
        <img className="Stars" key={i} src={StarActive} alt="star-filled" />
      );
    } else {
      // Sinon on affiche une étoile vide
      stars.push(
        <img className="Stars" key={i} src={StarInactive} alt="star-empty" />
      );
    }
  }

  return <div>{stars}</div>; // Retourne les etoiles
};
export default Rating;
