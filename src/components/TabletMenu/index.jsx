import React from "react";
import { Link } from "react-router-dom";
import Group40 from "../Group40";
import "./TabletMenu.css";

function TabletMenu(props) {
  const { tabletMenu, background, addFriend2, loremIpsum, path43, dolorSitAmet } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-menu screen" style={{ backgroundImage: `url(${tabletMenu})` }}>
        <div className="overlap-group-74">
          <div className="background-6"></div>
          <img className="background-7" src={background} />
          <div className="arrow-13"></div>
          <div className="group-38">
            <img className="add-friend-2-1" src={addFriend2} />
            <Link to="/tablet-my-profile">
              <div className="lorem-ipsum-1 manrope-semi-bold-quick-silver-20px">{loremIpsum}</div>
            </Link>
          </div>
          <Group40 />
          <div className="group-43">
            <img className="path-43-3" src={path43} />
            <a href="https://nulifespan.com/store-2/" target="_blank">
              <div className="dolor-sit-amet-1 manrope-semi-bold-quick-silver-20px">{dolorSitAmet}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletMenu;
