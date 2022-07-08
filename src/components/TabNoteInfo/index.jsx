import React from "react";
import "./TabNoteInfo.css";

function TabNoteInfo(props) {
  const { path1, path10, path3, path4, path8 } = props;

  return (
    <div className="tab-note-info">
      <div className="overlap-group1-42">
        <img className="path-7" src={require("../../static/img/path-7-1@1x.png")} />
        <img className="path-1" src={path1} />
        <img className="path-2" src={require("../../static/img/path-2-1@1x.png")} />
        <div className="path-container">
          <img className="path-9" src={require("../../static/img/path-9-1@1x.png")} />
          <img className="path-10" src={path10} />
          <img className="path-11" src={require("../../static/img/path-11-1@1x.png")} />
        </div>
        <img className="path-3" src={path3} />
        <div className="rectangle-1"></div>
        <img className="path-4" src={path4} />
        <img className="path-5" src={require("../../static/img/path-5-1@1x.png")} />
        <img className="path-6" src={require("../../static/img/path-6-1@1x.png")} />
        <img className="path-8" src={path8} />
      </div>
    </div>
  );
}

export default TabNoteInfo;
