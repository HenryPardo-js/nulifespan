import React from "react";
import Active from "../Active";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import "./MobileSearchPop.css";

function MobileSearchPop(props) {
  const { superAdmin, activeProps, buttonWithdrawAllEarningProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-search-pop screen">
        <div className="group-21">
          <Active inputBox={activeProps.inputBox} inputHere={activeProps.inputHere} />
          <div className="flex-row-10">
            <ButtonWithdrawAllEarning>{buttonWithdrawAllEarningProps.children}</ButtonWithdrawAllEarning>
            <div className="super-admin-6 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSearchPop;
