import React from "react";
import logo from "../../assets/logo-footer.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <div className="copyright"> © 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default Footer;
