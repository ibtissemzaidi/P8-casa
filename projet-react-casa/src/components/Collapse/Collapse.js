import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  /***Déclaration de la variable d'état isOpen avec la fonction setIsOpen pour la mettre à jour***/
  const [isOpen, setIsOpen] = useState(false);
  /***  Fonction pour ouvrir ou fermer le collapse en inversant la valeur de isOpen  ***/
  const openCloseCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div
        onClick={openCloseCollapse}
        className={`collapse_title ${isOpen ? "open" : ""}`}
      >
        {title}
      </div>
      <div className={`collapse_content ${isOpen ? "animated" : "hidden"}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
