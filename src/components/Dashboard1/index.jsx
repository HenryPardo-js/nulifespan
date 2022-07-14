import React from "react";
import "./Dashboard1.css";
import imagen from "../../static/img/vector-12@1x.png"

function Dashboard1(props) {
  const { dashboard1, className } = props;

  return (
    <div className={`dashboard-1-1 ${className || ""}`} style={{ backgroundImage: `url(${imagen})` }}>
      <img className="vector-80" src={require("../../static/img/vector-13@1x.png")} />
    </div>
  );
}

export default Dashboard1;
