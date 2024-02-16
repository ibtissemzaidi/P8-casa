import data from "../data.json";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";

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
