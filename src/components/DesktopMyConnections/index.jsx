import React from "react";
import "./DesktopMyConnections.css";

function DesktopMyConnections(props) {
  const { background, nav, sidebar, dashboard } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-connections screen">
        <div className="overlap-group-76">
          <img className="background-9" src={require("../../static/img/background-4@1x.png")} />
          <img className="nav-3" src={require("../../static/img/nav-1x-png@1x.png")} />
          <img className="sidebar-2" src={require("../../static/img/sidebar-1x-png@1x.png")} />
          <div className="dashboard-11 gotham-bold-eerie-black-34px">{dashboard}</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopMyConnections;
