import React from "react";
import DEFAULTSTATE2 from "../DEFAULTSTATE2";
import "./TabbedContentMobile.css";

function TabbedContentMobile(props) {
  const { dEFAULTSTATE21Props, dEFAULTSTATE22Props, dEFAULTSTATE23Props } = props;

  return (
    <div className="tabbed-content-mobile">
      <DEFAULTSTATE2 path39={dEFAULTSTATE21Props.path39} projectsCompleted={dEFAULTSTATE21Props.projectsCompleted} />
      <DEFAULTSTATE2
        path39={dEFAULTSTATE22Props.path39}
        projectsCompleted={dEFAULTSTATE22Props.projectsCompleted}
        className={dEFAULTSTATE22Props.className}
      />
      <div className="report-3">
        <div className="overlap-group2-9">
          <img className="rectangle-6-1" src={require("../../static/img/rectangle-6-2@1x.png")} />
          <div className="projects-completed-7 manrope-semi-bold-black-8px">PAYMENTS</div>
        </div>
      </div>
      <div className="report-4">
        <DEFAULTSTATE2
          path39={dEFAULTSTATE23Props.path39}
          projectsCompleted={dEFAULTSTATE23Props.projectsCompleted}
          className={dEFAULTSTATE23Props.className}
        />
      </div>
    </div>
  );
}

export default TabbedContentMobile;
