import React from "react";
import "./DueDate2.css";

function DueDate2(props) {
  const { children } = props;

  return (
    <div className="due-date-12">
      <div className="x1000-1100-12 manrope-normal-eerie-black-8px">{children}</div>
    </div>
  );
}

export default DueDate2;
