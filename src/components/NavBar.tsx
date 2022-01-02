import * as React from "react";

const logo = require("../../static/assets/images/zeLogo.gif");

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <img src={logo} alt="Logo" className="logo" />
        <p className="nav__title">QR Code Customization Generator</p>
      </div>
    </div>
  );
};

export default NavBar;
