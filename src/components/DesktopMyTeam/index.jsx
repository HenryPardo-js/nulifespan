import React from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Icons from "../Icons";
import Profile from "../Profile";
import Header3 from "../Header3";
import Dashboard1 from "../Dashboard1";
import Users from "../Users";
import X04 from "../X04";
import "./DesktopMyTeam.css";
import imagen from "../../static/img/layer-2-10@1x.png";
import imagen2 from "../../static/img/left-menu-ad1-1@1x.png";
import imagen3 from "../../static/img/path-38-1@1x.png";
import imagen4 from "../../static/img/bg-3@1x.png"

function DesktopMyTeam(props) {
  const {
    iconUser,
    dashboard1,
    proposal,
    projects,
    contacts,
    overlapGroup3,
    overlapGroup1,
    yourImageHere,
    sleepangle,
    overlapGroup,
    shopNow,
    onSale,
    ongoing,
    dashboard2,
    searchboxProps,
    group2Props,
    dashboard1Props,
    usersProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-team screen">
        <div className="overlap-group4-6">
          <div className="overlap-group5-5">
            <div className="nav-9">
              <Searchbox className={searchboxProps.className} search2Props={searchboxProps.search2Props} />
              <Group2 className={group2Props.className} />
              <Icons />
              <div className="separator-4"></div>
              <a href="javascript:ShowOverlay('desktop-top-right-menu', 'animate-appear');">
                <div className="profile-12">
                  <div className="overlap-group2-13">
                    <img className="icon-user-6" src={iconUser} />
                  </div>
                  <Profile />
                </div>
              </a>
            </div>
            <div className="sidebar-6">
              <Header3 />
              <div className="menus-4">
                <Link to="/desktop-home-dashboard">
                  <div className="x01-19">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                    <div className="dashboard-17 manrope-medium-white-18px">{dashboard1}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-connections">
                  <div className="x02-8">
                    <div className="proposal-5" style={{ backgroundImage: `url(${imagen})` }}></div>
                    <div className="projects-4 manrope-medium-quick-silver-18px">{projects}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-sales">
                  <div className="x03-3">
                    <Users thumbnail1Props={usersProps.thumbnail1Props} />
                    <div className="contacts-6 manrope-medium-quick-silver-18px">{contacts}</div>
                  </div>
                </Link>
                <X04 />
              </div>
              <div className="overlap-group3-5" style={{ backgroundImage: `url(${imagen2})` }}></div>
              <div className="overlap-group1-39" style={{ backgroundImage: `url(${imagen3})` }}>
                <img className="your-image-here-4" src={require("../../static/img/your-image-here-1@1x.png")} />
                <img className="sleepangle-3" src={require("../../static/img/sleepangle-1@1x.png")} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-35">
                    <div className="overlap-group-83" style={{ backgroundImage: `url(${imagen4})` }}>
                      <div className="shop-now-8 manrope-bold-white-13px">{shopNow}</div>
                    </div>
                  </div>
                </a>
                <div className="on-sale-4 gotham-bold-eerie-black-24px">{onSale}</div>
                <div className="ongoing-10 manrope-normal-white-12px">{ongoing}</div>
              </div>
            </div>
          </div>
          <div className="dashboard-18 gotham-bold-eerie-black-34px">{dashboard2}</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopMyTeam;
