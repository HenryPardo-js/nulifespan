import React from "react";
import Header2 from "../Header2";
import Dashboard from "../Dashboard";
import Kanban from "../Kanban";
import "./SIDEBAR2.css";

function SIDEBAR2(props) {
  const { thumbnail1Props, thumbnail1Props2, thumbnail1Props3 } = props;

  return (
    <div className="sidebar-11">
      <Header2 src={thumbnail1Props.src} className={thumbnail1Props.className} />
      <div className="menus-9">
        <div className="menu-5 opensans-bold-cloud-16px">MENU</div>
        <Dashboard dashboard1Props={thumbnail1Props2.dashboard1Props} />
        <div className="email-7">
          <div className="proposal-10"></div>
        </div>
        <Kanban thumbnail1Props={thumbnail1Props3.thumbnail1Props} />
        <div className="overlap-group-100">
          <div className="users-11"></div>
        </div>
      </div>
    </div>
  );
}

export default SIDEBAR2;
