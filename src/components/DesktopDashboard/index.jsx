import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Icons from "../Icons";
import Profile from "../Profile";
import Header from "../Header";
import X01 from "../X01";
import Users from "../Users";
import MarketingAd1 from "../MarketingAd1";
import TabbedReports from "../TabbedReports";
import Rightbar from "../Rightbar";
import "./DesktopDashboard.css";
import {getUser} from "../api/info"

function DesktopDashboard(props) {
  const {
    icon1,
    proposal,
    projects,
    contacts,
    myTasks1,
    vector2,
    myTasks2,
    overlapGroup21,
    yourImageHere,
    sleepangle,
    overlapGroup,
    shopNow,
    onSale,
    ongoing,
    dashboard,
    welcome,
    yourRewardsCash,
    price,
    name,
    icon2,
    withdraw,
    overlapGroup3,
    iconConect,
    shop,
    overlapGroup1, 
    yourShareLink,
    sampleNulifespanCom,
    shareYourLinkWith,
    iconFile,
    copy,
    overlapGroup22,
    projectsCompleted,
    spanText1,
    spanText2,
    chart2,
    number1,
    overlapGroup32,
    projectsInProgress,
    spanText3,
    spanText4,
    number2,
    overlapGroup4,
    upcomingProjects,
    bg,
    circleChart,
    percent,
    spanText5,
    spanText6,
    number3,
    searchboxProps,
    x01Props,
    usersProps,
    tabbedReportsProps,
    rightbarProps,
  } = props;
  const [dataUser, setdataUser]=useState(null);
  useEffect(() => {
    (async () => {
      const response = await getUser("jd@nulifespan.com");
      // console.log(response[0]);
      setdataUser(response[0]);
    })();
  }, []);


  return (
    <div className="container-center-horizontal">
      <div className="desktop-dashboard screen">
        <div className="overlap-group11-2">
          <div className="background-16"></div>
          <div className="nav-18">
              <Searchbox search2Props={searchboxProps.search2Props} /> 
              <Group2 /> 
              <Icons />
            <div className="separator-10"></div>
            <a href="javascript:ShowOverlay('desktop-top-right-menu', 'animate-appear');">
              <div className="profile-21">
                <div className="overlap-group1-55">
                  <img className="icon-10" src={icon1} />
                </div>
                <Profile />
              </div>
            </a>
          </div>
          <div className="sidebar-12">
            <Header />
            <div className="menus-10">
              <X01 dashboard1Props={x01Props.dashboard1Props} />
              <Link to="/desktop-my-connections">
                <div className="x02-11">
                  <div className="proposal-11" style={{ backgroundImage: `url(${proposal})` }}></div>
                  <div className="projects-7 manrope-medium-quick-silver-18px">{projects}</div>
                </div>
              </Link>
              <Link to="/desktop-my-sales">
                <div className="x03-5">
                  <Users thumbnail1Props={usersProps.thumbnail1Props} />
                  <div className="contacts-9 manrope-medium-quick-silver-18px">{contacts}</div>
                </div>
              </Link>
              <Link to="/desktop-my-team">
                <div className="x04-5">
                  <div className="overlap-group-102">
                    <img className="vector-168" src={require("../../static/img/vector-107@1x.png")} />
                    <div className="my-tasks-7 manrope-medium-quick-silver-18px">{myTasks1}</div>
                  </div>
                  <div className="flex-row-23">
                    <img className="vector-169" src={require("../../static/img/vector-107@1x.png")} />
                    <div className="my-tasks-8 manrope-medium-quick-silver-18px">{myTasks2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <MarketingAd1 />
            <div className="marketing-ad-2-1">
              <div className="overlap-group2-28" style={{ backgroundImage: `url(../../static/img/path-38-1@1x.png)` }}>
                <img className="your-image-here-7" src={require("../../static/img/your-image-here-1@1x.png")} />
                <img className="sleepangle-6" src={require("../../static/img/sleepangle-1@1x.png")} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-25-1">
                    <div className="overlap-group-103" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <div className="shop-now-11 manrope-bold-white-13px">{shopNow}</div>
                    </div>
                  </div>
                </a>
                <div className="on-sale-7 gotham-bold-eerie-black-24px">{onSale}</div>
                <div className="ongoing-13 manrope-normal-white-12px">{ongoing}</div>
              </div>
            </div>
          </div>
          <div className="content-2">
            <div className="over-container-1">
              <div className="overlap-group10-1">
                <div className="dashboard-33 gotham-bold-eerie-black-34px">{dashboard}</div>
                <div className="welcome-4 opensans-normal-quick-silver-18px">{dataUser==null?"Error":(`Hello ${dataUser["firstName"]}, welcome back!`)}</div> 
              </div>
              <div className="overview-1">
                <div className="flex-row-24">
                  <div className="card-rewards-2">
                    <div className="earning-report-6">
                      <div className="text-earning-this-month-10">
                        <div className="your-rewards-cash-3 manrope-normal-quick-silver-16px">{yourRewardsCash}</div>
                        <div className="price-9 manrope-bold-black-49px">{price}</div>
                        <p className="name-9 manrope-normal-quick-silver-14px">{name}</p>
                        <div className="flex-row-25">
                          <a href="javascript:ShowOverlay('desktop-transfer-good', 'animate-appear');">
                            <div className="button-withdraw-all-earning-19">
                              <img className="icon-11" src={require("../../static/img/icon-1@1x.png")} />
                              <div className="withdraw-2 manrope-bold-white-13px">{withdraw}</div>
                            </div>
                          </a>
                          <div className="overlap-group-104" style={{ backgroundImage: `url(../../static/img/bg-1@1x.png)` }}>
                            <img className="icon-conect-2" src={require("../../static/img/icon-conect@1x.png")} />
                            <div className="shop-2 manrope-bold-shadow-blue-13px">{shop}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group1-56" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                    <div className="share-link-2">
                      <div className="text-earning-this-month-11">
                        <div className="group-1-4">
                          <div className="your-share-link-2 manrope-normal-quick-silver-16px">{yourShareLink}</div>
                          <div className="samplenulifespancom-4 manrope-bold-black-29px">{sampleNulifespanCom}</div>
                          <p className="share-your-link-with-2 manrope-normal-quick-silver-14px">{shareYourLinkWith}</p>
                          <div className="button-withdraw-all-earning-20">
                            <img className="icon-file-2" src={require("../../static/img/icon-file@1x.png")} />
                            <div className="copy-2 manrope-bold-white-13px">{copy}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-container-3">
                  <div className="overlap-group2-29" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                    <div className="projects-completed-11 manrope-semi-bold-black-18px">{projectsCompleted}</div>
                    <div className="overlap-group-105">
                      <div className="growth-7">
                        <div className="x15-than-last-month-5 manrope-normal-turmeric-18px">
                          <span className="manrope-bold-turmeric-18px">{spanText1}</span>
                          <span className="opensans-normal-turmeric-14px">{spanText2}</span>
                        </div>
                      </div>
                      <img className="chart-2-3" src={require("../../static/img/chart-2@1x.png")} />
                      <div className="number-30 cairo-bold-midnight-moss-38px">{number1}</div>
                    </div>
                  </div>
                  <div className="overlap-group3-18" style={{ backgroundImage: `url(${overlapGroup32})` }}>
                    <div className="projects-in-progress-3 manrope-semi-bold-white-18px">{projectsInProgress}</div>
                    <div className="overlap-group-106">
                      <div className="group-11-3">
                        <div className="chart-21"></div>
                        <div className="chart-22"></div>
                        <div className="chart-23"></div>
                        <div className="chart-24"></div>
                        <div className="chart-25"></div>
                        <div className="chart-26"></div>
                      </div>
                      <div className="growth-7">
                        <div className="x15-than-last-month-5 manrope-normal-white-18px">
                          <span className="manrope-bold-white-18px">{spanText3}</span>
                          <span className="opensans-normal-white-14px">{spanText4}</span>
                        </div>
                      </div>
                      <div className="number-30 cairo-bold-turmeric-38px">{number2}</div>
                    </div>
                  </div>
                  <div className="overlap-group4-12" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <div className="upcoming-projects-3 manrope-semi-bold-black-18px">{upcomingProjects}</div>
                    <div className="overlap-group1-57">
                      <div className="overlap-group-107">
                        <img className="bg-4" src={require("../../static/img/bg-2@1x.png")} />
                        <img className="circle-chart-1" src={require("../../static/img/circle-chart@1x.png")} />
                        <div className="percent-15 manrope-bold-black-16px">{percent}</div>
                      </div>
                      <div className="growth-7">
                        <div className="x15-than-last-month-5 manrope-normal-black-18px">
                          <span className="manrope-bold-black-18px">{spanText5}</span>
                          <span className="opensans-normal-black-14px">{spanText6}</span>
                        </div>
                      </div>
                      <div className="number-30 cairo-bold-black-38px">{number3}</div>
                    </div>
                  </div>
                </div>
                <TabbedReports
                  dEFAULTSTATE1Props={tabbedReportsProps.dEFAULTSTATE1Props}
                  dEFAULTSTATE2Props={tabbedReportsProps.dEFAULTSTATE2Props}
                  dEFAULTSTATE3Props={tabbedReportsProps.dEFAULTSTATE3Props}
                  dEFAULTSTATE4Props={tabbedReportsProps.dEFAULTSTATE4Props}
                />
              </div>
            </div>
            <Rightbar
              dueDate1Props={rightbarProps.dueDate1Props}
              dueDate2Props={rightbarProps.dueDate2Props}
              dueDate3Props={rightbarProps.dueDate3Props}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopDashboard;
