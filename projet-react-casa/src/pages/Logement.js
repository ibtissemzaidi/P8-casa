import data from "../data.json";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";

const Logement = () => {
  /***  Récupère la bonne fiche ***/
  const { id } = useParams();
  const ficheLogement = data.find((logement) => logement.id === id);
  if (!ficheLogement) {
    // Si l'id n'existe pas, affiche la page d'erreur
    return <Error />;
  }

  /***  Tags  ***/
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /***   Équipements  ***/
  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });
  return (
    <>
      <Header />
      <div></div>

      <Footer />
    </>
  );
};

export default Logement;
