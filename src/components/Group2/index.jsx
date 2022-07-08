import React from "react";
import "./Group2.css";

function Group2(props) {
  const { className } = props;

  return (
    <div className={`group-2 ${className || ""}`}>
      <div className="united-states-1">
        <div className="overlap-group-6">
          <div className="group">
            <img className="vector-26" src={require("../../static/img/vector-202@1x.png")} />
            <img className="vector-27" src={require("../../static/img/vector-201@1x.png")} />
            <img className="vector-28" src={require("../../static/img/vector-204@1x.png")} />
            <img className="vector-29" src={require("../../static/img/vector-203@1x.png")} />
          </div>
          <img className="vector-30" src={require("../../static/img/vector-200@1x.png")} />
        </div>
      </div>
      <div className="eng-us cairo-bold-eerie-black-16px">ENG (US)</div>
      <img className="arrow" src={require("../../static/img/arrow-1@1x.png")} />
    </div>
  );
}

export default Group2;
