import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/background-home.png";
import data from "../../data.json";
import Card from "../../components/Card/Card";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Banner title="Chez vous, partout et ailleurs" image={image} />
        <div className="Home-card">
          {data.map((card) => {
            return <Card image={card.cover} title={card.title} id={card.id} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
