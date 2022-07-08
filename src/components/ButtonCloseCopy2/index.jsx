import React from "react";
import "./ButtonCloseCopy2.css";

function ButtonCloseCopy2(props) {
  const { className } = props;

  return (
    <div className={`button-close border-1px-cararra ${className || ""}`}>
      <img className="icon-close" src={require("../../static/img/icon-close-1@1x.png")} />
    </div>
  );
}

export default ButtonCloseCopy2;
