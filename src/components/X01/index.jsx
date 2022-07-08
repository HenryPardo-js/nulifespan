import React from "react";
import Dashboard1 from "../Dashboard1";
import "./X01.css";

function X01(props) {
  const { dashboard1Props } = props;

  return (
    <div className="x01">
      <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
      <div className="dashboard-1 manrope-medium-white-18px">Dashboard</div>
    </div>
  );
}

export default X01;
