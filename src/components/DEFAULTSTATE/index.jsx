import React from "react";
import "./DEFAULTSTATE.css";

function DEFAULTSTATE(props) {
  const { defaultState, projectsCompleted, className } = props;

  return (
    <div className={`default-state ${className || ""}`} style={{ backgroundImage: `url(${defaultState})` }}>
      <div className="projects-completed-1 manrope-semi-bold-black-14px">
        <img src={require("../../static/img/rectangle-5@1x.png")} />
      </div>
    </div>
  );
}

export default DEFAULTSTATE;
