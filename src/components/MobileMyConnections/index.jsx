import React from "react";
import { Link } from "react-router-dom";
import "./MobileMyConnections.css";

function MobileMyConnections(props) {
  const { overlapGroup, nav, projects, searchbox } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-connections screen">
        <div className="overlap-group-78" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="nav-5" src={nav} />
          <div className="flex-row-6">
            <img className="projects-2" src={projects} />
            <a href="javascript:ShowOverlay('mobile-search-pop', 'animate-appear');" className="align-self-flex-end">
              <img className="searchbox-9" src={searchbox} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMyConnections;
