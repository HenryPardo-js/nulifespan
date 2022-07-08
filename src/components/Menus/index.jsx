import React from "react";
import X01 from "../X01";
import X02 from "../X02";
import X03 from "../X03";
import X04 from "../X04";
import "./Menus.css";

function Menus(props) {
  const { dashboard1Props, dashboard1Props2 } = props;

  return (
    <div className="menus-8">
      <X01 dashboard1Props={dashboard1Props.dashboard1Props} />
      <X02 />
      <X03 usersProps={dashboard1Props2.usersProps} />
      <X04 />
    </div>
  );
}

export default Menus;
