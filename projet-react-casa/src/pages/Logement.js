import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";

const Logement = (data) => {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);
  if (!accommodation) {
    return <div>Accommodation not found</div>;
  }
  const { title, pictures, location, tags, host, description, equipments } =
    accommodation;
  return (
    <>
      <Header />
      <div className="Acommodation container">
        <Gallery images={pictures} />
        <div className="left">
          <h2>{title}</h2>
          <h3>{location}</h3>
          <div className="Tags">
            {tags.map((tag, id) => (
              <Tag key={id}>{tag}</Tag>
            ))}
          </div>
          <div className="right">
            <div className="Accommodation-host">
              <div className="Accommodation-name">
                <h3>{host.name}</h3>
              </div>
              <div className="Accommodation-picture">
                <img src={host.picture} alt={host.name} />
              </div>
            </div>
            <div className="Accommodation-rating"> </div>
          </div>
        </div>
        <div className="Accommodation-body">
          <Collapse title="Description">{description}</Collapse>
          <Collapse title="Équipements">
            <ul>
              {equipments.map((equipment, id) => (
                <li key={id}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Logement;
