import React from "react";
import Dashboard1 from "../Dashboard1";
import "./Dashboard.css";

function Dashboard(props) {
  const { dashboard1Props } = props;

  return (
    <div className="dashboard-5">
      <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
    </div>
  );
}

export default Dashboard;
