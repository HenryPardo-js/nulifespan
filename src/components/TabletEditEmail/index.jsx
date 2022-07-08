import React from "react";
import Group22 from "../Group22";
import "./TabletEditEmail.css";

function TabletEditEmail(props) {
  const { group22Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-edit-email screen">
        <Group22 className={group22Props.className} />
      </div>
    </div>
  );
}

export default TabletEditEmail;
