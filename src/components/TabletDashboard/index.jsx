import React from "react";
import { Link } from "react-router-dom";
import Searchbox2 from "../Searchbox2";
import Icons from "../Icons";
import Header2 from "../Header2";
import Dashboard from "../Dashboard";
import Thumbnail1 from "../Thumbnail1";
import Group26 from "../Group26";
import Bg from "../Bg";
import Group14 from "../Group14";
import Group1 from "../Group1";
import Group142 from "../Group142";
import Rightbar2 from "../Rightbar2";
import "./TabletDashboard.css";

function TabletDashboard(props) {
  const {
    icon1,
    profile,
    menu,
    proposal,
    users,
    dashboard,
    welcome,
    icon2,
    withdraw,
    overlapGroup1,
    iconConect,
    shop,
    yourShareLink,
    sampleNulifespanCom,
    shareYourLinkWith,
    iconFile,
    copy,
    overlapGroup2,
    spanText1,
    spanText2,
    spanText3,
    projectsCompleted1,
    number,
    chart2,
    overlapGroup22,
    spanText4,
    spanText5,
    spanText6,
    projectsInProgress,
    x182,
    overlapGroup3,
    spanText7,
    spanText8,
    spanText9,
    upcomingProjects,
    x1125,
    chart,
    overlapGroup4,
    percent,
    overlapGroup12,
    yourImageHere,
    sleepangle,
    onSale,
    ongoing,
    path39,
    projectsCompleted2,
    rectangle5,
    projectsCompleted3,
    rectangle6,
    projectsCompleted4,
    rectangle7,
    projectsCompleted5,
    searchbox2Props,
    iconsProps,
    header2Props,
    dashboardProps,
    thumbnail1Props,
    rightbar2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-dashboard screen">
        <div className="overlap-group14-1">
          <div className="background-17"></div>
          <div className="nav-19">
            <Searchbox2 search2Props={searchbox2Props.search2Props} />
            <Icons className={iconsProps.className} />
            <div className="separator-11"></div>
            <a href="javascript:ShowOverlay('tablet-menu', 'animate-appear');">
              <div className="profile-22">
                <div className="overlap-group1-58">
                  <img className="icon-12" src={icon1} />
                </div>
                <div className="profile-23" style={{ backgroundImage: `url(${profile})` }}></div>
              </div>
            </a>
          </div>
          <div className="sidebar-13">
            <Header2 src={header2Props.src} />
            <div className="menus-11">
              <div className="menu-6 opensans-bold-cloud-16px">{menu}</div>
              <Dashboard dashboard1Props={dashboardProps.dashboard1Props} />
              <Link to="/tablet-my-connections">
                <div className="email-8">
                  <div className="proposal-12" style={{ backgroundImage: `url(${proposal})` }}></div>
                </div>
              </Link>
              <Link to="/tablet-my-sales">
                <div className="kanban-5">
                  <Thumbnail1 className={thumbnail1Props.className} />
                </div>
              </Link>
              <div className="overlap-group-110">
                <Link to="/tablet-my-team">
                  <div className="background-18"></div>
                </Link>
                <div className="users-12" style={{ backgroundImage: `url(${users})` }}></div>
              </div>
            </div>
          </div>
          <div className="content-3">
            <div className="flex-col-2">
              <div className="overlap-group13-1">
                <div className="dashboard-34 gotham-bold-eerie-black-34px">{dashboard}</div>
                <div className="welcome-5 opensans-normal-quick-silver-16px">{welcome}</div>
              </div>
              <div className="card-container-1">
                <div className="card-rewards-3">
                  <div className="earning-report-7">
                    <div className="text-earning-this-month-12">
                      <Group26 />
                      <div className="flex-row-26">
                        <a href="javascript:ShowOverlay('tablet-transfer-good', 'animate-appear');">
                          <div className="button-withdraw-all-earning-21">
                            <img className="icon-13" src={icon2} />
                            <div className="withdraw-3 manrope-bold-white-8px">{withdraw}</div>
                          </div>
                        </a>
                        <div className="overlap-group-111" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                          <img className="icon-conect-3" src={iconConect} />
                          <div className="shop-3 manrope-bold-shadow-blue-8px">{shop}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-share-link-1">
                  <div className="share-link-3">
                    <div className="text-earning-this-month-13">
                      <div className="group-1-5">
                        <div className="your-share-link-3 manrope-normal-quick-silver-10px">{yourShareLink}</div>
                        <div className="samplenulifespancom-5 manrope-bold-black-14px">{sampleNulifespanCom}</div>
                        <p className="share-your-link-with-3 manrope-normal-quick-silver-8px">{shareYourLinkWith}</p>
                        <div className="button-withdraw-all-earning-22">
                          <img className="icon-file-3" src={iconFile} />
                          <div className="copy-3 manrope-bold-white-8px">{copy}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-10-1">
                <div className="card-total-page-views-1">
                  <div className="overlap-group-112" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                    <div className="overlap-group1-59">
                      <div className="growth-8">
                        <div className="x15-than-last-month-6 manrope-normal-turmeric-12px-2">
                          <span className="manrope-bold-turmeric-12px">{spanText1}</span>
                          <span className="opensans-normal-turmeric-14px">{spanText2}</span>
                          <span className="opensans-normal-turmeric-10px">{spanText3}</span>
                        </div>
                      </div>
                      <div className="projects-completed-13 manrope-semi-bold-black-11px">{projectsCompleted1}</div>
                      <div className="number-31 cairo-bold-black-38px">{number}</div>
                    </div>
                    <img className="chart-2-4" src={chart2} />
                  </div>
                </div>
                <div className="card-3">
                  <div className="overlap-group-108" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                    <div className="growth-9">
                      <div className="x15-than-last-month-7 manrope-normal-white-12px-2">
                        <span className="manrope-bold-white-12px">{spanText4}</span>
                        <span className="opensans-normal-white-14px">{spanText5}</span>
                        <span className="opensans-normal-white-10px">{spanText6}</span>
                      </div>
                    </div>
                    <div className="overlap-group-113">
                      <div className="projects-in-progress-4 manrope-semi-bold-white-11px">{projectsInProgress}</div>
                      <div className="x182-2 cairo-bold-white-38px">{x182}</div>
                    </div>
                    <div className="group-11-4">
                      <div className="chart-27"></div>
                      <div className="chart-28"></div>
                      <div className="chart-29"></div>
                      <div className="chart-30"></div>
                      <div className="chart-31"></div>
                      <div className="chart-32"></div>
                    </div>
                  </div>
                </div>
                <div className="card-3">
                  <div className="overlap-group-108" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                    <div className="overlap-group2-30">
                      <div className="growth-10">
                        <div className="x15-than-last-month-8 manrope-normal-black-12px">
                          <span className="manrope-bold-black-12px">{spanText7}</span>
                          <span className="opensans-normal-black-14px">{spanText8}</span>
                          <span className="opensans-normal-black-10px">{spanText9}</span>
                        </div>
                      </div>
                      <div className="overlap-group1-60">
                        <div className="upcoming-projects-4 manrope-semi-bold-black-12px">{upcomingProjects}</div>
                        <div className="x1125-2 cairo-bold-black-38px">{x1125}</div>
                      </div>
                    </div>
                    <div className="chart-33" style={{ backgroundImage: `url(${chart})` }}>
                      <div className="overlap-group-114" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                        <div className="percent-16 manrope-bold-black-10px">{percent}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-container-4">
                <div className="overlap-group11-3">
                  <div className="bg-image-1">
                    <div className="bg-5">
                      <div className="overlap-group-115">
                        <Bg />
                        <a href="https://nulifespangear.secureshopcart.com/" target="_blank">
                          <div className="button-withdraw-all-earning-23">
                            <Group14 />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Group1 />
                </div>
                <div className="overlap-group12-1" style={{ backgroundImage: `url(${overlapGroup12})` }}>
                  <img className="your-image-here-8" src={yourImageHere} />
                  <img className="sleepangle-7" src={sleepangle} />
                  <div className="on-sale-8 gotham-bold-eerie-black-20px">{onSale}</div>
                  <div className="ongoing-14 manrope-normal-white-10px">{ongoing}</div>
                  <a href="https://nulifespan.com/store-2/">
                    <div className="button-withdraw-all-earning-24">
                      <Group142 />
                    </div>
                  </a>
                </div>
              </div>
              <div className="overlap-group-container-5">
                <div className="overlap-group7-6">
                  <img className="path-39-3" src={path39} />
                  <div className="projects-completed-12 manrope-semi-bold-black-10px">{projectsCompleted2}</div>
                </div>
                <div className="overlap-group8-5">
                  <img className="rectangle-5-1" src={rectangle5} />
                  <div className="projects-completed-14 manrope-semi-bold-black-10px">{projectsCompleted3}</div>
                </div>
                <div className="overlap-group-109">
                  <img className="rectangle-6-3" src={rectangle6} />
                  <div className="projects-completed-12 manrope-semi-bold-black-10px">{projectsCompleted4}</div>
                </div>
                <div className="overlap-group-109">
                  <img className="rectangle-7-1" src={rectangle7} />
                  <div className="projects-completed-12 manrope-semi-bold-black-10px">{projectsCompleted5}</div>
                </div>
              </div>
            </div>
            <Rightbar2 dueDate2Props={rightbar2Props.dueDate2Props} dueDate3Props={rightbar2Props.dueDate3Props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletDashboard;
