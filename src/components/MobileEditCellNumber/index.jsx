import React from "react";
import Active from "../Active";
import "./MobileEditCellNumber.css";

function MobileEditCellNumber(props) {
  const { saveChanges, superAdmin, activeProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-edit-cell-number screen">
        <div className="group-21-3">
          <Active inputBox={activeProps.inputBox} inputHere={activeProps.inputHere} className={activeProps.className} />
          <div className="flex-row-15">
            <div className="button-withdraw-all-earning-15">
              <div className="save-changes-2 manrope-bold-white-13px">{saveChanges}</div>
            </div>
            <div className="super-admin-18 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileEditCellNumber;
