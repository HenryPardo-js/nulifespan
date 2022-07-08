import React from "react";
import { Link } from "react-router-dom";
import Searchbox22 from "../Searchbox22";
import Icons from "../Icons";
import Header2 from "../Header2";
import Dashboard1 from "../Dashboard1";
import Kanban from "../Kanban";
import "./TabletMySales.css";

function TabletMySales(props) {
  const {
    iconUser,
    profile,
    menu,
    proposal,
    users,
    dashboard,
    searchbox22Props,
    iconsProps,
    header2Props,
    dashboard1Props,
    kanbanProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-my-sales screen">
        <div className="overlap-group2-12">
          <div className="background-11"></div>
          <div className="nav-7">
            <Searchbox22 search2Props={searchbox22Props.search2Props} />
            <Icons className={iconsProps.className} />
            <div className="separator-3"></div>
            <a href="javascript:ShowOverlay('tablet-menu', 'animate-appear');">
              <div className="profile-10">
                <div className="overlap-group1-37">
                  <img className="icon-user-5" src={iconUser} />
                </div>
                <div className="profile-11" style={{ backgroundImage: `url(${profile})` }}></div>
              </div>
            </a>
          </div>
          <div className="sidebar-5">
            <Header2 src={header2Props.src} />
            <div className="menus-3">
              <div className="menu-2 opensans-bold-cloud-16px">{menu}</div>
              <Link to="/tablet-home-dashboard">
                <div className="dashboard-15">
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                </div>
              </Link>
              <Link to="/tablet-my-connections">
                <div className="email-1">
                  <div className="proposal-4" style={{ backgroundImage: `url(${proposal})` }}></div>
                </div>
              </Link>
              <Kanban thumbnail1Props={kanbanProps.thumbnail1Props} />
              <div className="overlap-group-80">
                <Link to="/tablet-my-team">
                  <div className="background-12"></div>
                </Link>
                <div className="users-8" style={{ backgroundImage: `url(${users})` }}></div>
              </div>
            </div>
          </div>
          <div className="dashboard-16 gotham-bold-eerie-black-34px">{dashboard}</div>
        </div>
      </div>
    </div>
  );
}

export default TabletMySales;
