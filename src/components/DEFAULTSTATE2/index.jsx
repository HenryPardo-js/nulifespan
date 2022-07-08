import React from "react";
import "./DEFAULTSTATE2.css";

function DEFAULTSTATE2(props) {
  const { path39, projectsCompleted, className } = props;

  return (
    <div className={`default-state-2 ${className || ""}`}>
      <div className="overlap-group-69">
        <img className="path-39-1" src={path39} />
        <div className="projects-completed-9 manrope-semi-bold-black-8px">{projectsCompleted}</div>
      </div>
    </div>
  );
}

export default DEFAULTSTATE2;
