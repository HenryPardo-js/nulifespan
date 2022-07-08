import React from "react";
import "./Dashboard1.css";

function Dashboard1(props) {
  const { dashboard1, className } = props;

  return (
    <div className={`dashboard-1-1 ${className || ""}`} style={{ backgroundImage: `url(${dashboard1})` }}>
      <img className="vector-80" src={require("../../static/img/vector-13@1x.png")} />
    </div>
  );
}

export default Dashboard1;
