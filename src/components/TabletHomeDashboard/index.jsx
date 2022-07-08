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
import "./TabletHomeDashboard.css";

function TabletHomeDashboard(props) {
  const {
    iconUser,
    profile,
    menu,
    proposal,
    users,
    dashboard,
    welcome,
    icon,
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
      <div className="tablet-home-dashboard screen">
        <div className="overlap-group14">
          <div className="background-1"></div>
          <div className="nav-1">
            <Searchbox2 search2Props={searchbox2Props.search2Props} />
            <Icons className={iconsProps.className} />
            <div className="separator-1"></div>
            <a href="javascript:ShowOverlay('tablet-menu', 'animate-appear');">
              <div className="profile-7">
                <div className="overlap-group1-19">
                  <img className="icon-user-2" src={iconUser} />
                </div>
                <div className="profile-8" style={{ backgroundImage: `url(${profile})` }}></div>
              </div>
            </a>
          </div>
          <div className="sidebar-1">
            <Header2 src={header2Props.src} />
            <div className="menus-1">
              <div className="menu opensans-bold-cloud-16px">{menu}</div>
              <Dashboard dashboard1Props={dashboardProps.dashboard1Props} />
              <Link to="/tablet-my-connections">
                <div className="email">
                  <div className="proposal-1" style={{ backgroundImage: `url(${proposal})` }}></div>
                </div>
              </Link>
              <Link to="/tablet-my-sales">
                <div className="kanban">
                  <Thumbnail1 className={thumbnail1Props.className} />
                </div>
              </Link>
              <div className="overlap-group-42">
                <Link to="/tablet-my-team">
                  <div className="background-2"></div>
                </Link>
                <div className="users-7" style={{ backgroundImage: `url(${users})` }}></div>
              </div>
            </div>
          </div>
          <div className="content-1">
            <div className="flex-col">
              <div className="overlap-group13">
                <div className="dashboard-4 gotham-bold-eerie-black-34px">{dashboard}</div>
                <div className="welcome-1 opensans-normal-quick-silver-16px">{welcome}</div>
              </div>
              <div className="card-container">
                <div className="card-rewards-1">
                  <div className="earning-report-3">
                    <div className="text-earning-this-month-4">
                      <Group26 />
                      <div className="flex-row-3">
                        <a href="javascript:ShowOverlay('tablet-transfer-good', 'animate-appear');">
                          <div className="button-withdraw-all-earning-4">
                            <img className="icon-4" src={icon} />
                            <div className="withdraw-1 manrope-bold-white-8px">{withdraw}</div>
                          </div>
                        </a>
                        <div className="overlap-group-43" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                          <img className="icon-conect-1" src={iconConect} />
                          <div className="shop-1 manrope-bold-shadow-blue-8px">{shop}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-share-link">
                  <div className="share-link-1">
                    <div className="text-earning-this-month-5">
                      <div className="group-1-1">
                        <div className="your-share-link-1 manrope-normal-quick-silver-10px">{yourShareLink}</div>
                        <div className="samplenulifespancom-1 manrope-bold-black-14px">{sampleNulifespanCom}</div>
                        <p className="share-your-link-with-1 manrope-normal-quick-silver-8px">{shareYourLinkWith}</p>
                        <div className="button-withdraw-all-earning-5">
                          <img className="icon-file-1" src={iconFile} />
                          <div className="copy-1 manrope-bold-white-8px">{copy}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-10">
                <div className="card-total-page-views">
                  <div className="overlap-group-44" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                    <div className="overlap-group1-20">
                      <div className="growth-1">
                        <div className="x15-than-last-month-1 manrope-normal-turmeric-12px-2">
                          <span className="manrope-bold-turmeric-12px">{spanText1}</span>
                          <span className="opensans-normal-turmeric-14px">{spanText2}</span>
                          <span className="opensans-normal-turmeric-10px">{spanText3}</span>
                        </div>
                      </div>
                      <div className="projects-completed-4 manrope-semi-bold-black-11px">{projectsCompleted1}</div>
                      <div className="number-15 cairo-bold-black-38px">{number}</div>
                    </div>
                    <img className="chart-2-1" src={chart2} />
                  </div>
                </div>
                <div className="card">
                  <div className="overlap-group-40" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                    <div className="growth-2">
                      <div className="x15-than-last-month-2 manrope-normal-white-12px-2">
                        <span className="manrope-bold-white-12px">{spanText4}</span>
                        <span className="opensans-normal-white-14px">{spanText5}</span>
                        <span className="opensans-normal-white-10px">{spanText6}</span>
                      </div>
                    </div>
                    <div className="overlap-group-45">
                      <div className="projects-in-progress-1 manrope-semi-bold-white-11px">{projectsInProgress}</div>
                      <div className="x182 cairo-bold-white-38px">{x182}</div>
                    </div>
                    <div className="group-11-1">
                      <div className="chart-7"></div>
                      <div className="chart-8"></div>
                      <div className="chart-9"></div>
                      <div className="chart-10"></div>
                      <div className="chart-11"></div>
                      <div className="chart-12"></div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="overlap-group-40" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                    <div className="overlap-group2-3">
                      <div className="growth-3">
                        <div className="x15-than-last-month-3 manrope-normal-black-12px">
                          <span className="manrope-bold-black-12px">{spanText7}</span>
                          <span className="opensans-normal-black-14px">{spanText8}</span>
                          <span className="opensans-normal-black-10px">{spanText9}</span>
                        </div>
                      </div>
                      <div className="overlap-group1-21">
                        <div className="upcoming-projects-1 manrope-semi-bold-black-12px">{upcomingProjects}</div>
                        <div className="x1125 cairo-bold-black-38px">{x1125}</div>
                      </div>
                    </div>
                    <div className="chart-13" style={{ backgroundImage: `url(${chart})` }}>
                      <div className="overlap-group-46" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                        <div className="percent-5 manrope-bold-black-10px">{percent}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-container-1">
                <div className="overlap-group11-1">
                  <div className="bg-image">
                    <div className="bg-1">
                      <div className="overlap-group-47">
                        <Bg />
                        <a href="https://nulifespangear.secureshopcart.com/" target="_blank">
                          <div className="button-withdraw-all-earning-6">
                            <Group14 />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Group1 />
                </div>
                <div className="overlap-group12" style={{ backgroundImage: `url(${overlapGroup12})` }}>
                  <img className="your-image-here-1" src={yourImageHere} />
                  <img className="sleepangle-1" src={sleepangle} />
                  <div className="on-sale-1 gotham-bold-eerie-black-20px">{onSale}</div>
                  <div className="ongoing-3 manrope-normal-white-10px">{ongoing}</div>
                  <a href="https://nulifespan.com/store-2/">
                    <div className="button-withdraw-all-earning-7">
                      <Group142 />
                    </div>
                  </a>
                </div>
              </div>
              <div className="overlap-group-container-2">
                <div className="overlap-group7-2">
                  <img className="path-39" src={path39} />
                  <div className="projects-completed-3 manrope-semi-bold-black-10px">{projectsCompleted2}</div>
                </div>
                <div className="overlap-group8-2">
                  <img className="rectangle-5" src={rectangle5} />
                  <div className="projects-completed-5 manrope-semi-bold-black-10px">{projectsCompleted3}</div>
                </div>
                <div className="overlap-group-41">
                  <img className="rectangle-6" src={rectangle6} />
                  <div className="projects-completed-3 manrope-semi-bold-black-10px">{projectsCompleted4}</div>
                </div>
                <div className="overlap-group-41">
                  <img className="rectangle-7" src={rectangle7} />
                  <div className="projects-completed-3 manrope-semi-bold-black-10px">{projectsCompleted5}</div>
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

export default TabletHomeDashboard;
