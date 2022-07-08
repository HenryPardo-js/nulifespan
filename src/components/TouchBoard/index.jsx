import React from "react";
import "./TouchBoard.css";

function TouchBoard(props) {
  const { rewardsCash, x0, className } = props;

  return (
    <div className={`touch-board-2 ${className || ""}`}>
      <div className="card-1">
        <div className="group-15">
          <div className="overlap-group-61">
            <div className="rewards-cash manrope-medium-white-9px">{rewardsCash}</div>
            <div className="x0 manrope-bold-white-24px">{x0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouchBoard;
