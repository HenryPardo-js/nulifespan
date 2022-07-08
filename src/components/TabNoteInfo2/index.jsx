import React from "react";
import "./TabNoteInfo2.css";

function TabNoteInfo2(props) {
  const { className } = props;

  return (
    <div className={`tab-note-info-4 ${className || ""}`}>
      <div className="overlap-group1-46">
        <img className="path" src={require("../../static/img/path-7-4@1x.png")} />
        <img className="path-1-4" src={require("../../static/img/path-1-5@1x.png")} />
        <img className="path" src={require("../../static/img/path-2-4@1x.png")} />
        <div className="path-container-4">
          <img className="path-9-4" src={require("../../static/img/path-9-4@1x.png")} />
          <img className="path-10-4" src={require("../../static/img/path-10-4@1x.png")} />
          <img className="path-11-4" src={require("../../static/img/path-11-4@1x.png")} />
        </div>
        <img className="path-12" src={require("../../static/img/path-3-4@1x.png")} />
        <div className="rectangle-1-4"></div>
        <img className="path-4-4" src={require("../../static/img/path-4-4@1x.png")} />
        <img className="path-12" src={require("../../static/img/path-5-4@1x.png")} />
        <img className="path-6-4" src={require("../../static/img/path-6-4@1x.png")} />
        <img className="path-8-4" src={require("../../static/img/path-8-4@1x.png")} />
      </div>
    </div>
  );
}

export default TabNoteInfo2;
