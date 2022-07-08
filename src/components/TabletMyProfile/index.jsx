import React from "react";
import { Link } from "react-router-dom";
import Searchbox22 from "../Searchbox22";
import Icons from "../Icons";
import Header2 from "../Header2";
import Dashboard1 from "../Dashboard1";
import Thumbnail1 from "../Thumbnail1";
import "./TabletMyProfile.css";

function TabletMyProfile(props) {
  const {
    iconUser,
    profile,
    menu,
    proposal,
    users,
    addFriend2,
    superAdmin1,
    levelStatusCusto,
    dashboard1,
    dashboard2,
    sampleNulifespanCom,
    iconCall,
    phone,
    superAdmin2,
    email21,
    email,
    superAdmin3,
    searchbox22Props,
    iconsProps,
    header2Props,
    dashboard1Props,
    thumbnail1Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-my-profile screen">
        <div className="overlap-group3-10">
          <div className="overlap-group4-10">
            <a href="javascript:ShowOverlay('tablet-menu', 'animate-appear');">
              <div className="nav-13">
                <Searchbox22 search2Props={searchbox22Props.search2Props} />
                <Icons className={iconsProps.className} />
                <div className="separator-7"></div>
                <div className="profile-16">
                  <div className="overlap-group1-49">
                    <img className="icon-user-9" src={iconUser} />
                  </div>
                  <div className="profile-17" style={{ backgroundImage: `url(${profile})` }}></div>
                </div>
              </div>
            </a>
            <div className="sidebar-9">
              <Header2 src={header2Props.src} />
              <div className="menus-7">
                <div className="menu-4 opensans-bold-cloud-16px">{menu}</div>
                <Link to="/tablet-home-dashboard">
                  <div className="dashboard-25">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                  </div>
                </Link>
                <Link to="/tablet-my-connections">
                  <div className="email-4">
                    <div className="proposal-8" style={{ backgroundImage: `url(${proposal})` }}></div>
                  </div>
                </Link>
                <Link to="/tablet-my-sales">
                  <div className="kanban-4">
                    <Thumbnail1 className={thumbnail1Props.className} />
                  </div>
                </Link>
                <div className="overlap-group-90">
                  <Link to="/tablet-my-team">
                    <div className="users-10" style={{ backgroundImage: `url(${users})` }}></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a href="javascript:ShowOverlay('tablet-upload-avatar', 'animate-appear');">
            <div className="group-20">
              <img className="add-friend-2-3" src={addFriend2} />
            </div>
          </a>
          <a href="javascript:ShowOverlay('tablet-upload-avatar', 'animate-appear');">
            <div className="super-admin-10 manrope-normal-royal-blue-14px">{superAdmin1}</div>
          </a>
          <div className="level-status-custo-1 manrope-normal-quick-silver-18px">{levelStatusCusto}</div>
          <div className="dashboard-26 gotham-bold-eerie-black-34px">{dashboard1}</div>
          <div className="overlap-group2-19">
            <div className="dashboard-27 manrope-bold-eerie-black-20px">{dashboard2}</div>
            <div className="samplenulifespancom-2 manrope-normal-quick-silver-18px">{sampleNulifespanCom}</div>
          </div>
          <div className="group-31">
            <img className="icon-call-1" src={iconCall} />
            <div className="phone-1 manrope-normal-quick-silver-18px">{phone}</div>
            <div className="super-admin-11 manrope-normal-royal-blue-14px">{superAdmin2}</div>
          </div>
          <div className="group-30">
            <img className="email-2-1-1" src={email21} />
            <div className="email-5 manrope-normal-quick-silver-18px">{email}</div>
            <div className="super-admin-12 manrope-normal-royal-blue-14px">{superAdmin3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletMyProfile;
