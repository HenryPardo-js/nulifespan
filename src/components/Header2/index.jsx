import React from "react";
import "./Header2.css";

function Header2(props) {
  const { src, className } = props;

  return (
    <div className={`header-2 ${className || ""}`}>
      <div className="overlap-group1-22">
        <div className="group-3-1" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    </div>
  );
}

export default Header2;
