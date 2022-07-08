import React from "react";
import Active from "../Active";
import "./MobileEditEmail.css";

function MobileEditEmail(props) {
  const { saveChanges, superAdmin, activeProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-edit-email screen">
        <div className="group-21-4">
          <Active inputBox={activeProps.inputBox} inputHere={activeProps.inputHere} />
          <div className="flex-row-18">
            <div className="button-withdraw-all-earning-18">
              <div className="save-changes-5 manrope-bold-white-13px">{saveChanges}</div>
            </div>
            <div className="super-admin-21 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileEditEmail;
