import React from "react";
import Searchbox22 from "../Searchbox22";
import Icons from "../Icons";
import SIDEBAR2 from "../SIDEBAR2";
import "./TabletMyTimiFit.css";

function TabletMyTimiFit(props) {
  const { dashboard, icon, profile, searchbox22Props, iconsProps, sIDEBAR2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-my-timifit screen">
        <div className="overlap-group2-26">
          <div className="background-15">
            <div className="dashboard-31 gotham-bold-eerie-black-34px">{dashboard}</div>
          </div>
          <div className="nav-16">
            <Searchbox22 search2Props={searchbox22Props.search2Props} />
            <Icons className={iconsProps.className} />
            <div className="separator-9"></div>
            <div className="profile-19">
              <div className="overlap-group1-54">
                <img className="icon-user-11" src={icon} />
              </div>
              <div className="profile-20" style={{ backgroundImage: `url(${profile})` }}></div>
            </div>
          </div>
          <SIDEBAR2
            thumbnail1Props={sIDEBAR2Props.thumbnail1Props}
            thumbnail1Props2={sIDEBAR2Props.thumbnail1Props2}
            thumbnail1Props3={sIDEBAR2Props.thumbnail1Props3}
          />
        </div>
      </div>
    </div>
  );
}

export default TabletMyTimiFit;
