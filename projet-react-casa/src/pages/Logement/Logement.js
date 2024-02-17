import data from "../../data.json";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import Gallery from "../../components/Gallery/Gallery";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Error from "../Home/Home";
import "./Logement.scss";

// Page Logement > Contient le Composant Gallery, compo Rating et le composant Collapsedescription ainsi que les infos du logement et du propriétaire

const Logement = () => {
  /***  Récupère la bonne fiche ***/
  const [logement, setLogement] = useState(null);
  const { id } = useParams(); // Récupère l'id du logement dans l'url

  useEffect(() => {
    // Récupère les infos du logement en fonction de l'id
    const dataLocation = data.find((location) => location.id === id);
    if (data) {
      setLogement(dataLocation);
    } else {
      setLogement(null);
    }
  }, [id]);
  if (!logement) {
    // Si l'id n'existe pas, affiche la page d'erreur
    return <Error />;
  }

  // Crréer un tableau pour le passer en props au composant Collapsehome
  const dataLocation = [
    {
      title: "Description",
      text: logement.description,
    },
    {
      title: "Equipements",
      // Créer une liste avec les équipements
      text: logement.equipments.map((equipment) => (
        <p className="TextCollapse" key={equipment}>
          {equipment}
        </p>
      )),
    },
  ];

  return (
    <>
      <Header />
      {logement.pictures && <Gallery images={logement.pictures} />}
      <section className="'ContInfo'">
        <div className="ContInfoLogement">
          <h1 className="TittleInfo">{logement.title}</h1>
          <p className="TextInfo">{logement.location}</p>
          <ul className="TagUl">
            {logement.tags.map((tag) => (
              <li className="TagLi" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="ContInfoOwner">
          <div className="TEST">
            <p className="TextInfoOwner">{logement.host.name}</p>
            <img
              className="ImgOwner"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </section>
      <Collapse dataLocation={dataLocation} />
      <Footer />
    </>
  );
};

export default Logement;
