import React from "react";
import "./DueDate.css";

function DueDate(props) {
  const { children, className } = props;

  return (
    <div className={`due-date-2 ${className || ""}`}>
      <div className="x1000-1100-6 manrope-normal-eerie-black-12px">{children}</div>
    </div>
  );
}

export default DueDate;
