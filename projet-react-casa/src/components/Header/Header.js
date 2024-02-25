import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} className="Logo" alt="logo" />
        <ul>
          <li>
            <NavLink to={"/"} className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="nav-link">
              A propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
