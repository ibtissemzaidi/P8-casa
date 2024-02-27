import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Error = () => {
  return (
    <>
      <Header />
      <div className="error">
        <h1 className="error_nbr">404</h1>
        <p className="error_txt">
          Oups! La page que vous demandez n'existe pas
        </p>
        <NavLink to="/" className="error_Link">
          Retourner sur la page d'accueil
        </NavLink>
        <i>{Error.statusText || Error.message}</i>
      </div>
      <Footer />
    </>
  );
};

export default Error;
