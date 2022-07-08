import React from "react";
import "./Icons.css";

function Icons(props) {
  const { className } = props;

  return (
    <div className={`icons ${className || ""}`}>
      <div className="notification">
        <div className="overlap-group1-3">
          <div className="bell-1">
            <img className="vector-56" src={require("../../static/img/vector-103@1x.png")} />
            <img className="vector-57" src={require("../../static/img/vector-104@1x.png")} />
          </div>
          <div className="overlap-group-12 border-3px-white">
            <div className="number-1 poppins-semi-bold-white-14px">12</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;
