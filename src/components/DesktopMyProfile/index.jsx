import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Icons from "../Icons";
import Profile from "../Profile";
import Header3 from "../Header3";
import MarketingAd1 from "../MarketingAd1"; 
import Dashboard1 from "../Dashboard1";
import Users from "../Users";
import "./DesktopMyProfile.css";
import fondo from "../../static/img/path-38-1@1x.png"
import fondo2 from "../../static/img/bg-3@1x.png"
import {getUser} from "../api/info";
import Backdrop from '@mui/material/Backdrop';
import DesktopEditEmail from "../../components/DesktopEditEmail/index"
import DesktopEditCellNumber from "../../components/DesktopEditCellNumber/index";
import imagen from "../../static/img/layer-2-10@1x.png";


function DesktopMyProfile(props) {
  const {
    iconUser,
    dashboard1,
    proposal,
    projects,
    contacts,
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
    welcome,
    addFriend2,
    superAdmin1,
    dashboard3,
    levelStatusCusto,
    phone,
    email,
    dashboard4,
    webaliasNulifespanCom,
    iconCall,
    email21,
    superAdmin2,
    superAdmin3,
    line1,
    searchboxProps,
    group2Props,
    dashboard1Props,
    usersProps,
  } = props;
  const [dataUser, setdataUser]=useState(null);
  useEffect(() => {
    (async () => {
      const response = await getUser("jd@nulifespan.com");
      console.log(response);
      setdataUser(response[0]);
    })();
  }, []);
  // ============================================================
  const [openEmail, setOpenEmail] = useState(false);
  const handleClose = () => {
    setOpenEmail(false);
  };
  const handleToggle = () => {
    setOpenEmail(!openEmail);
  };
  // ==============================================================
  const [openPhone, setOpenPhone] = useState(false);
  const handleClosePhone = () => {
    setOpenPhone(false);
  };
  const handleTogglePhone = () => {
    setOpenPhone(!openPhone);
  };
  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-profile screen">
        <div className="overlap-group6-6">
          <div className="overlap-group7-5">
            <div className="nav-12">
              <Searchbox className={searchboxProps.className} search2Props={searchboxProps.search2Props} />
              <Group2 className={group2Props.className} />
              <Icons />
              <div className="separator-6"></div>
              <a href="javascript:ShowOverlay('desktop-top-right-menu', 'animate-appear');">
                <div className="profile-15">
                  <div className="overlap-group2-18">
                    <img className="icon-user-8" src={iconUser} />
                  </div>
                  <Profile />
                </div>
              </a>
            </div>
            <div className="sidebar-8">
              <Header3 />
              <div className="menus-6">
                <Link to="/desktop-home-dashboard">
                  <div className="x01-20">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                    <div className="dashboard-21 manrope-medium-white-18px">{dashboard1}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-connections">
                  <div className="x02-9">
                    <div className="proposal-7" style={{ backgroundImage: `url(${imagen})` }}></div>
                    <div className="projects-5 manrope-medium-quick-silver-18px">{projects}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-sales">
                  <div className="x03-4">
                    <Users thumbnail1Props={usersProps.thumbnail1Props} />
                    <div className="contacts-7 manrope-medium-quick-silver-18px">{contacts}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-team">
                  <div className="x04-4">
                    <img className="vector-167" src={require("../../static/img/vector-107@1x.png")} />
                    <div className="my-tasks-6 manrope-medium-quick-silver-18px">{myTasks}</div>
                  </div>
                </Link>
              </div>
              {/* <div className="overlap-group3-9" style={{ backgroundImage: `url(${overlapGroup3})` }}></div> */}
              <MarketingAd1 />
              <div className="overlap-group1-48" style={{ backgroundImage: `url(${fondo})` }}>
                <img className="your-image-here-5" src={require("../../static/img/your-image-here-1@1x.png")} />
                <img className="sleepangle-4" src={require("../../static/img/sleepangle-1@1x.png")} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-36">
                    <div className="overlap-group-88" style={{ backgroundImage: `url(${fondo2})` }}>
                      <div className="shop-now-9 manrope-bold-white-13px">{shopNow}</div>
                    </div>
                  </div>
                </a>
                <div className="on-sale-5 gotham-bold-eerie-black-24px">{onSale}</div>
                <div className="ongoing-11 manrope-normal-white-12px">{ongoing}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group8-4">
            <div className="dashboard-22 gotham-bold-eerie-black-34px">{dashboard2}</div>
            <div className="welcome-3 opensans-normal-quick-silver-18px">{`Hello ${dataUser==null?"User":(dataUser["firstName"])}, welcome back!`}</div>
          </div>
          <div className="overlap-group4-9">
            <a href="javascript:ShowOverlay('desktop-upload-avatar', 'animate-appear');">
              <div className="profile-picture"></div>
            </a>
            <img className="add-friend-2-2" src={require("../../static/img/add-friend-2-2@1x.png")} />
          </div>
          <a href="javascript:ShowOverlay('desktop-upload-avatar', 'animate-appear');">
            <div className="super-admin-7 manrope-normal-royal-blue-14px">{superAdmin1}</div>
          </a>
          <div className="group-23">
            <div className="overlap-group5-6">
              <div className="big-title">
                <div className="dashboard-23 gotham-bold-eerie-black-34px">{dataUser==null?"Default":(dataUser["firstName"])}</div>
                <div className="level-status-custo manrope-normal-quick-silver-18px">Level Status {dataUser==null?"Default":(dataUser["customerType"])}
      <br />
      Sponsor Name: {dataUser==null?"Default":(dataUser["fullName"])}
      <br />
      Sponsor ID: {dataUser==null?"Default":(dataUser["id"])}</div>
                <div className="phone manrope-normal-quick-silver-18px">Phone: {dataUser==null?"Default":(dataUser["phoneNumbers"][0]["number"])}</div>
                <div className="email-3">Email: {dataUser==null?"Default":(dataUser["emailAddress"])}</div>
                <div className="overlap-group-89">
                  <div className="dashboard-24 manrope-bold-eerie-black-20px">{dashboard4}</div>
                  <div className="webaliasnulifespancom manrope-normal-quick-silver-18px">{webaliasNulifespanCom}</div>
                </div>
              </div>
              <img className="icon-call" src={iconCall} />
              <img className="email-2-1" src={email21} />
            </div>
            <div className="super-admin-container">
              {/* <Link to="/desktop-edit-cell-number">
                <div className="super-admin-8 manrope-normal-royal-blue-14px">{superAdmin2}</div>
              </Link> */}
              <div className="super-admin-8 manrope-normal-royal-blue-14px" onClick={handleTogglePhone}>{superAdmin2}</div>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openPhone}
                onClick={handleClosePhone}
              >
                <DesktopEditCellNumber/>
              </Backdrop>
              {/* <Link to="/desktop-edit-email">
                <div className="super-admin-9 manrope-normal-royal-blue-14px">{superAdmin3}</div>
              </Link> */}
              <div className="super-admin-9 manrope-normal-royal-blue-14px" onClick={handleToggle}>{superAdmin3}</div>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openEmail}
                onClick={handleClose}
              >
                <DesktopEditEmail/>
              </Backdrop>
            </div>
          </div>
          <img className="line-1-1" src={line1} />
        </div>
      </div>
    </div>
  );
}

export default DesktopMyProfile;
