import React from "react";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Icons from "../Icons";
import Profile from "../Profile";
import Header3 from "../Header3";
import Menus from "../Menus";
import "./DesktopMyTimiFiT.css";

function DesktopMyTimiFiT(props) {
  const {
    iconUser,
    overlapGroup3,
    overlapGroup1,
    yourImageHere,
    sleepangle,
    overlapGroup,
    shopNow,
    onSale,
    ongoing,
    dashboard,
    searchboxProps,
    group2Props,
    iconsProps,
    menusProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-timifit screen">
        <div className="overlap-group4-11">
          <div className="overlap-group5-7">
            <div className="nav-15">
              <Searchbox className={searchboxProps.className} search2Props={searchboxProps.search2Props} />
              <Group2 className={group2Props.className} />
              <Icons className={iconsProps.className} />
              <div className="separator-8"></div>
              <div className="profile-18">
                <div className="overlap-group2-25">
                  <img className="icon-user-10" src={iconUser} />
                </div>
                <Profile />
              </div>
            </div>
            <div className="sidebar-10">
              <Header3 />
              <Menus dashboard1Props={menusProps.dashboard1Props} dashboard1Props2={menusProps.dashboard1Props2} />
              <div className="overlap-group3-15" style={{ backgroundImage: `url(${overlapGroup3})` }}></div>
              <div className="overlap-group1-53" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <img className="your-image-here-6" src={yourImageHere} />
                <img className="sleepangle-5" src={sleepangle} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-36-1">
                    <div className="overlap-group-99" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <div className="shop-now-10 manrope-bold-white-13px">{shopNow}</div>
                    </div>
                  </div>
                </a>
                <div className="on-sale-6 gotham-bold-eerie-black-24px">{onSale}</div>
                <div className="ongoing-12 manrope-normal-white-12px">{ongoing}</div>
              </div>
            </div>
          </div>
          <div className="dashboard-30 gotham-bold-eerie-black-34px">{dashboard}</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopMyTimiFiT;
