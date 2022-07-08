import React from "react";
import "./Group22.css";

function Group22(props) {
  const { className } = props;

  return (
    <div className={`group-22 ${className || ""}`}>
      <div className="active-8">
        <div className="input-8">
          <div className="input-box-8 gotham-bold-cloud-16px">EMAIL</div>
          <div className="overlap-group-97 border-1px-quick-silver">
            <div className="input-here-14 cairo-semi-bold-eerie-black-20px">xxxx@xxxxx.xxx</div>
          </div>
        </div>
      </div>
      <div className="flex-row-16">
        <div className="button-withdraw-all-earning-16">
          <div className="save-changes-3 manrope-bold-white-13px">Save Changes</div>
        </div>
        <div className="super-admin-19 manrope-normal-royal-blue-14px">Cancel</div>
      </div>
    </div>
  );
}

export default Group22;
