import React from "react";
import Group21 from "../Group21";
import "./TabletEditCellNumber.css";

function TabletEditCellNumber(props) {
  const { group21Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-edit-cell-number screen">
        <Group21 className={group21Props.className} />
      </div>
    </div>
  );
}

export default TabletEditCellNumber;
