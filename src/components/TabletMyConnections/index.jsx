import React from "react";
import "./TabletMyConnections.css";

function TabletMyConnections(props) {
  const { background, nav, sidebar, dashboard } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-my-connections screen">
        <div className="overlap-group-77">
          <img className="background-10" src={background} />
          <img className="nav-4" src={nav} />
          <img className="sidebar-3" src={sidebar} />
          <div className="dashboard-12 gotham-bold-eerie-black-34px">{dashboard}</div>
        </div>
      </div>
    </div>
  );
}

export default TabletMyConnections;
