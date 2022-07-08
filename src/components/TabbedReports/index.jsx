import React from "react";
import DEFAULTSTATE from "../DEFAULTSTATE";
import "./TabbedReports.css";

function TabbedReports(props) {
  const { dEFAULTSTATE1Props, dEFAULTSTATE2Props, dEFAULTSTATE3Props, dEFAULTSTATE4Props } = props;

  return (
    <div className="tabbed-reports">
      <DEFAULTSTATE
        defaultState={dEFAULTSTATE1Props.defaultState}
        projectsCompleted={dEFAULTSTATE1Props.projectsCompleted}
      />
      <DEFAULTSTATE
        projectsCompleted={dEFAULTSTATE2Props.projectsCompleted}
        defaultState={dEFAULTSTATE2Props.defaultState}
        className={dEFAULTSTATE2Props.className}
      />
      <DEFAULTSTATE
        projectsCompleted={dEFAULTSTATE3Props.projectsCompleted}
        defaultState={dEFAULTSTATE3Props.defaultState}
        className={dEFAULTSTATE3Props.className}
      />
      <DEFAULTSTATE
        projectsCompleted={dEFAULTSTATE4Props.projectsCompleted}
        defaultState={dEFAULTSTATE4Props.defaultState}
        className={dEFAULTSTATE4Props.className}
      />
    </div>
  );
}

export default TabbedReports;
