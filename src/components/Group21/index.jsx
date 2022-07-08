import React from "react";
import "./Group21.css";

function Group21(props) {
  const { className } = props;

  return (
    <div className={`group-21-1 ${className || ""}`}>
      <div className="active-6">
        <div className="input-6">
          <div className="input-box-6 gotham-bold-cloud-16px">MOBILE PHONE</div>
          <div className="overlap-group-95 border-1px-quick-silver">
            <div className="input-here-12 cairo-semi-bold-eerie-black-20px">xxx-xxx-xxxx</div>
          </div>
        </div>
      </div>
      <div className="flex-row-13">
        <div className="button-withdraw-all-earning-13">
          <div className="save-changes manrope-bold-white-13px">Save Changes</div>
        </div>
        <div className="super-admin-16 manrope-normal-royal-blue-14px">Cancel</div>
      </div>
    </div>
  );
}

export default Group21;
