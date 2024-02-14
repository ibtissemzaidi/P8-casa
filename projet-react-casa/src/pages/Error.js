import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <p className="error_nbr">404</p>
      <p className="error_txt">Oups! La page que vous demandez n'existe pas</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <NavLink to="/" className="error_Link">
        Retourner sur la page d'accueil
      </NavLink>
      <i>{Error.statusText || Error.message}</i>
    </div>
  );
};

export default Error;
