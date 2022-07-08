import React from "react";
import "./Title.css";

function Title(props) {
  const { className } = props;

  return (
    <div className={`title-10 ${className || ""}`}>
      <div className="uh-oh manrope-bold-black-18px">Uh Oh!</div>
    </div>
  );
}

export default Title;
