import React from "react";
import NAV from "../NAV";
import "./MobileMyTimiFiT.css";

function MobileMyTimiFiT(props) {
  const { dashboard } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-timifit screen">
        <div className="overlap-group-101">
          <NAV />
          <div className="dashboard-32 gotham-bold-eerie-black-24px">{dashboard}</div>
        </div>
      </div>
    </div>
  );
}

export default MobileMyTimiFiT;
