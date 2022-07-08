import React from "react";
import "./Active.css";

function Active(props) {
  const { inputBox, inputHere, className } = props;

  return (
    <div className={`active ${className || ""}`}>
      <div className="input">
        <div className="input-box gotham-bold-cloud-16px">{inputBox}</div>
        <div className="overlap-group-85 border-1px-quick-silver">
          <div className="input-here cairo-semi-bold-eerie-black-20px">{inputHere}</div>
        </div>
      </div>
    </div>
  );
}

export default Active;
