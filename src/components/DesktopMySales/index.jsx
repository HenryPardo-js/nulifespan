import React from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Icons from "../Icons";
import Profile from "../Profile";
import Header3 from "../Header3";
import Dashboard1 from "../Dashboard1";
import X03 from "../X03";
import "./DesktopMySales.css";
import imagen from "../../static/img/layer-2-10@1x.png";
import imagen2 from "../../static/img/left-menu-ad1-1@1x.png"
import imagen3 from "../../static/img/path-38-1@1x.png"
import imagen4 from "../../static/img/bg-3@1x.png"

function DesktopMySales(props) {
  const {
    iconUser,
    dashboard1,
    proposal,
    projects,
    myTasks,
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
    iconsProps,
    dashboard1Props,
    x03Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-sales screen">
        <div className="overlap-group4-5">
          <div className="overlap-group5-4">
            <div className="nav-6">
              <Searchbox className={searchboxProps.className} search2Props={searchboxProps.search2Props} />
              <Group2 className={group2Props.className} />
              <Icons className={iconsProps.className} />
              <div className="separator-2"></div>
              <a href="javascript:ShowOverlay('desktop-top-right-menu', 'animate-appear');">
                <div className="profile-9">
                  <div className="overlap-group2-11">
                    <img className="icon-user-4" src={iconUser} />
                  </div>
                  <Profile />
                </div>
              </a>
            </div>
            <div className="sidebar-4">
              <Header3 />
              <div className="menus-2">
                <Link to="/desktop-home-dashboard">
                  <div className="x01-14">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                    <div className="dashboard-13 manrope-medium-white-18px">{dashboard1}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-connections">
                  <div className="x02-7">
                    <div className="proposal-3" style={{ backgroundImage: `url(${imagen})` }}></div>
                    <div className="projects-3 manrope-medium-quick-silver-18px">{projects}</div>
                  </div>
                </Link>
                <X03 usersProps={x03Props.usersProps} />
                <Link to="/desktop-my-team">
                  <div className="x04-1">
                    <img className="vector-146" src={require("../../static/img/vector-107@1x.png")} />
                    <div className="my-tasks-3 manrope-medium-quick-silver-18px">{myTasks}</div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group3-4" style={{ backgroundImage: `url(${imagen2})` }}></div>
              <div className="overlap-group1-36" style={{ backgroundImage: `url(${imagen3})` }}>
                <img className="your-image-here-3" src={require("../../static/img/your-image-here-1@1x.png")} />
                <img className="sleepangle-2" src={require("../../static/img/sleepangle-1@1x.png")} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-34">
                    <div className="overlap-group-79" style={{ backgroundImage: `url(${imagen4})` }}>
                      <div className="shop-now-7 manrope-bold-white-13px">{shopNow}</div>
                    </div>
                  </div>
                </a>
                <div className="on-sale-3 gotham-bold-eerie-black-24px">{onSale}</div>
                <div className="ongoing-9 manrope-normal-white-12px">{ongoing}</div>
              </div>
            </div>
          </div>
          <div className="dashboard-14 gotham-bold-eerie-black-34px">{dashboard2}</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopMySales;
