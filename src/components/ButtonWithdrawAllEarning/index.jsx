import React from "react";
import "./ButtonWithdrawAllEarning.css";

function ButtonWithdrawAllEarning(props) {
  const { children, className } = props;

  return (
    <div className={`button-withdraw-all-earning-9 ${className || ""}`}>
      <div className="search manrope-bold-white-13px">{children}</div>
    </div>
  );
}

export default ButtonWithdrawAllEarning;
