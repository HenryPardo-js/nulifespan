import React from "react";
import MENU from "../MENU";
import "./MobileHamburgerMenu.css";

function MobileHamburgerMenu(props) {
  const { mENUProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-hamburger-menu screen">
        <div className="mobile">
          <MENU {...mENUProps} />
        </div>
      </div>
    </div>
  );
}

export default MobileHamburgerMenu;
