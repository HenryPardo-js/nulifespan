import React from "react";
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
import "./DesktopHomeDashboard.css";

function DesktopHomeDashboard(props) {
  const {
    iconUser,
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
    icon,
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

  return (
    <div className="container-center-horizontal">
      <div className="desktop-home-dashboard screen">
        <div className="overlap-group11">
          <div className="background"></div>
          <div className="nav">
            <Searchbox search2Props={searchboxProps.search2Props} />
            <Group2 />
            <Icons />
            <div className="separator"></div>
            <a href="javascript:ShowOverlay('desktop-top-right-menu', 'animate-appear');">
              <div className="profile">
                <div className="overlap-group1">
                  <img className="icon-user" src={iconUser} />
                </div>
                <Profile />
              </div>
            </a>
          </div>
          <div className="sidebar">
            <Header />
            <div className="menus">
              <X01 dashboard1Props={x01Props.dashboard1Props} />
              <Link to="/desktop-my-connections">
                <div className="x02">
                  <div className="proposal" style={{ backgroundImage: `url(${proposal})` }}></div>
                  <div className="projects manrope-medium-quick-silver-18px">{projects}</div>
                </div>
              </Link>
              <Link to="/desktop-my-sales">
                <div className="x03">
                  <Users thumbnail1Props={usersProps.thumbnail1Props} />
                  <div className="contacts manrope-medium-quick-silver-18px">{contacts}</div>
                </div>
              </Link>
              <Link to="/desktop-my-team">
                <div className="x04">
                  <div className="overlap-group">
                    <img className="vector" src={require("../../static/img/vector-107@1x.png")} />
                    <div className="my-tasks manrope-medium-quick-silver-18px">{myTasks1}</div>
                  </div>
                  <div className="flex-row">
                    <img className="vector-1" src={vector2} />
                    <div className="my-tasks-1 manrope-medium-quick-silver-18px">{myTasks2}</div>
                  </div>
                </div>
              </Link>
            </div>
            <MarketingAd1 />
            <div className="marketing-ad-2">
              <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup21})` }}>
                <img className="your-image-here" src={yourImageHere} />
                <img className="sleepangle" src={sleepangle} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-25">
                    <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <div className="shop-now manrope-bold-white-13px">{shopNow}</div>
                    </div>
                  </div>
                </a>
                <div className="on-sale gotham-bold-eerie-black-24px">{onSale}</div>
                <div className="ongoing manrope-normal-white-12px">{ongoing}</div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="over-container">
              <div className="overlap-group10">
                <div className="dashboard gotham-bold-eerie-black-34px">{dashboard}</div>
                <div className="welcome opensans-normal-quick-silver-18px">{welcome}</div>
              </div>
              <div className="overview">
                <div className="flex-row-1">
                  <div className="card-rewards">
                    <div className="earning-report">
                      <div className="text-earning-this-month">
                        <div className="your-rewards-cash manrope-normal-quick-silver-16px">{yourRewardsCash}</div>
                        <div className="price manrope-bold-black-49px">{price}</div>
                        <p className="name manrope-normal-quick-silver-14px">{name}</p>
                        <div className="flex-row-2">
                          <a href="javascript:ShowOverlay('desktop-transfer-good', 'animate-appear');">
                            <div className="button-withdraw-all-earning">
                              <img className="icon" src={icon} />
                              <div className="withdraw manrope-bold-white-13px">{withdraw}</div>
                            </div>
                          </a>
                          <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                            <img className="icon-conect" src={iconConect} />
                            <div className="shop manrope-bold-shadow-blue-13px">{shop}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                    <div className="share-link">
                      <div className="text-earning-this-month-1">
                        <div className="group-1">
                          <div className="your-share-link manrope-normal-quick-silver-16px">{yourShareLink}</div>
                          <div className="samplenulifespancom manrope-bold-black-29px">{sampleNulifespanCom}</div>
                          <p className="share-your-link-with manrope-normal-quick-silver-14px">{shareYourLinkWith}</p>
                          <div className="button-withdraw-all-earning-1">
                            <img className="icon-file" src={iconFile} />
                            <div className="copy manrope-bold-white-13px">{copy}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-container">
                  <div className="overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                    <div className="projects-completed manrope-semi-bold-black-18px">{projectsCompleted}</div>
                    <div className="overlap-group-3">
                      <div className="growth">
                        <div className="x15-than-last-month manrope-normal-turmeric-18px">
                          <span className="manrope-bold-turmeric-18px">{spanText1}</span>
                          <span className="opensans-normal-turmeric-14px">{spanText2}</span>
                        </div>
                      </div>
                      <img className="chart-2" src={chart2} />
                      <div className="number cairo-bold-midnight-moss-38px">{number1}</div>
                    </div>
                  </div>
                  <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup32})` }}>
                    <div className="projects-in-progress manrope-semi-bold-white-18px">{projectsInProgress}</div>
                    <div className="overlap-group-4">
                      <div className="group-11">
                        <div className="chart"></div>
                        <div className="chart-1"></div>
                        <div className="chart-3"></div>
                        <div className="chart-4"></div>
                        <div className="chart-5"></div>
                        <div className="chart-6"></div>
                      </div>
                      <div className="growth">
                        <div className="x15-than-last-month manrope-normal-white-18px">
                          <span className="manrope-bold-white-18px">{spanText3}</span>
                          <span className="opensans-normal-white-14px">{spanText4}</span>
                        </div>
                      </div>
                      <div className="number cairo-bold-turmeric-38px">{number2}</div>
                    </div>
                  </div>
                  <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <div className="upcoming-projects manrope-semi-bold-black-18px">{upcomingProjects}</div>
                    <div className="overlap-group1-2">
                      <div className="overlap-group-5">
                        <img className="bg" src={bg} />
                        <img className="circle-chart" src={circleChart} />
                        <div className="percent manrope-bold-black-16px">{percent}</div>
                      </div>
                      <div className="growth">
                        <div className="x15-than-last-month manrope-normal-black-18px">
                          <span className="manrope-bold-black-18px">{spanText5}</span>
                          <span className="opensans-normal-black-14px">{spanText6}</span>
                        </div>
                      </div>
                      <div className="number cairo-bold-black-38px">{number3}</div>
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

export default DesktopHomeDashboard;
