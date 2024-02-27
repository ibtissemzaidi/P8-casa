import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <img src={logo} className="Logo" alt="logo" />
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
