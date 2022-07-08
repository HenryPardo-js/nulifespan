import React from "react";
import { Link } from "react-router-dom";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import Dashboard1 from "../Dashboard1";
import Users from "../Users";
import "./MENU.css";

function MENU(props) {
  const {
    menu,
    dashboard,
    proposal,
    projects,
    contacts,
    myTasks,
    setting11,
    settings1,
    path43,
    settings2,
    setting12,
    settings3,
    path41,
    settings4,
    dashboard1Props,
    usersProps,
  } = props;

  return (
    <div className="menu-1" style={{ backgroundImage: `url(${menu})` }}>
      <ButtonCloseCopy2 />
      <div className="overlap-group1-35">
        <Link to="/mobile-home-dashboard">
          <div className="dashboard-9">
            <div className="overlap-group-75">
              <div className="background-8"></div>
              <div className="active-indicator"></div>
              <div className="dashboard-10">{dashboard}</div>
              <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
            </div>
          </div>
        </Link>
        <Link to="/mobile-my-connections">
          <div className="group-19">
            <div className="proposal-2" style={{ backgroundImage: `url(${proposal})` }}></div>
            <div className="projects-1 manrope-medium-quick-silver-15px">{projects}</div>
          </div>
        </Link>
      </div>
      <Link to="/mobile-my-sales">
        <div className="chat">
          <Users thumbnail1Props={usersProps.thumbnail1Props} />
          <div className="contacts-1 manrope-medium-quick-silver-15px">{contacts}</div>
        </div>
      </Link>
      <Link to="/mobile-my-team">
        <div className="group-18">
          <img className="vector-145" src={require("../../static/img/vector-107@1x.png")} />
          <div className="my-tasks-2 manrope-medium-quick-silver-15px">{myTasks}</div>
        </div>
      </Link>
      <Link to="/mobile-my-profile">
        <div className="settings">
          <div className="setting-1" style={{ backgroundImage: `url(${setting11})` }}></div>
          <div className="settings-1 manrope-semi-bold-quick-silver-14px">{settings1}</div>
        </div>
      </Link>
      <a href="https://nulifespan.com/store-2/" target="_blank">
        <div className="settings-2">
          <img className="path-43-4" src={path43} />
          <div className="settings-3 manrope-semi-bold-quick-silver-14px">{settings2}</div>
        </div>
      </a>
      <div className="settings-4">
        <div className="setting-1-1" style={{ backgroundImage: `url(${setting12})` }}></div>
        <div className="settings-5 manrope-semi-bold-quick-silver-14px">{settings3}</div>
      </div>
      <div className="settings-6">
        <img className="path-41" src={path41} />
        <div className="settings-7">{settings4}</div>
      </div>
    </div>
  );
}

export default MENU;
