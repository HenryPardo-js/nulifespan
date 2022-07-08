import React from "react";
import "./ButtonSave.css";

function ButtonSave(props) {
  const { children, className } = props;

  return (
    <div className={`button-save ${className || ""}`}>
      <div className="lets-go manrope-bold-white-14px">{children}</div>
    </div>
  );
}

export default ButtonSave;
