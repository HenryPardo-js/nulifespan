import React from "react";
import { Link } from "react-router-dom";
import Group40 from "../Group40";
import "./DesktopTopRightMenu.css";

function DesktopTopRightMenu(props) {
  const { background, addFriend2, loremIpsum, path43, dolorSitAmet } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-top-right-menu screen">
        <div className="overlap-group-73">
          <div className="background-4"></div>
          <img className="background-5" src={background} />
          <div className="arrow-12"></div>
          <div className="group-42">
            <img className="add-friend-2" src={addFriend2} />
            <Link to="/desktop-my-profile">
              <div className="lorem-ipsum manrope-semi-bold-quick-silver-20px">{loremIpsum}</div>
            </Link>
          </div>
          <div className="group-41">
            <img className="path-43-2" src={path43} />
            <a href="https://nulifespan.com/store-2/" target="_blank">
              <div className="dolor-sit-amet manrope-semi-bold-quick-silver-20px">{dolorSitAmet}</div>
            </a>
          </div>
          <Group40 />
        </div>
      </div>
    </div>
  );
}

export default DesktopTopRightMenu;
