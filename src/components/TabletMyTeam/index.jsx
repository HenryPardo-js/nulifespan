import React from "react";
import { Link } from "react-router-dom";
import Searchbox22 from "../Searchbox22";
import Icons from "../Icons";
import Header2 from "../Header2";
import Dashboard1 from "../Dashboard1";
import Thumbnail1 from "../Thumbnail1";
import "./TabletMyTeam.css";

function TabletMyTeam(props) {
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
    thumbnail1Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-my-team screen">
        <div className="overlap-group2-14">
          <div className="overlap-group3-6">
            <div className="nav-11">
              <Searchbox22 search2Props={searchbox22Props.search2Props} />
              <Icons className={iconsProps.className} />
              <div className="separator-5"></div>
              <a href="javascript:ShowOverlay('tablet-menu', 'animate-appear');">
                <div className="profile-13">
                  <div className="overlap-group1-41">
                    <img className="icon-user-7" src={iconUser} />
                  </div>
                  <div className="profile-14" style={{ backgroundImage: `url(${profile})` }}></div>
                </div>
              </a>
            </div>
            <div className="sidebar-7">
              <Header2 src={header2Props.src} />
              <div className="menus-5">
                <div className="menu-3 opensans-bold-cloud-16px">{menu}</div>
                <Link to="/tablet-home-dashboard">
                  <div className="dashboard-19">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                  </div>
                </Link>
                <Link to="/tablet-my-connections">
                  <div className="email-2">
                    <div className="proposal-6" style={{ backgroundImage: `url(${proposal})` }}></div>
                  </div>
                </Link>
                <Link to="/tablet-my-sales">
                  <div className="kanban-3">
                    <Thumbnail1 className={thumbnail1Props.className} />
                  </div>
                </Link>
                <div className="overlap-group-84">
                  <div className="users-9" style={{ backgroundImage: `url(${users})` }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-20 gotham-bold-eerie-black-34px">{dashboard}</div>
        </div>
      </div>
    </div>
  );
}

export default TabletMyTeam;
