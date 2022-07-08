import React from "react";
import { Link } from "react-router-dom";
import Search22 from "../Search22";
import X3ColumnCTACards from "../X3ColumnCTACards";
import RankProgress from "../RankProgress";
import TabbedContentMobile from "../TabbedContentMobile";
import Group143 from "../Group143";
import EarningReport from "../EarningReport";
import "./MobileDashboard.css";

function MobileDashboard(props) {
  const {
    logo,
    dashboard,
    welcome,
    brandPartnerPresidentClub1,
    overlapGroup1,
    spanText1,
    spanText2,
    projectsCompleted,
    x4115,
    chart2,
    groupContainer,
    projectsInProgress,
    x182,
    spanText3,
    spanText4,
    overlapGroup4,
    upcomingProjects,
    x1125,
    chart,
    overlapGroup2,
    percent,
    spanText5,
    spanText6,
    focusuMobile,
    merchToolsStoreMobile2X,
    yourImageHere,
    nulifespan_AllProductsOnStands1000W,
    onSale,
    ongoing,
    x3ColumnCTACardsProps,
    tabbedContentMobileProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-dashboard screen">
        <div className="overlap-group9-3">
          <div className="background-19"></div>
          <div className="nav-20">
            <div className="logo-11" style={{ backgroundImage: `url(${logo})` }}></div>
            <a href="javascript:ShowOverlay('mobile-hamburger-menu', 'animate-appear');">
              <div className="hamburgermenu-5">
                <div className="x01-21"></div>
                <div className="hamburgermenu-item-5"></div>
                <div className="hamburgermenu-item-5"></div>
              </div>
            </a>
          </div>
          <a href="javascript:ShowOverlay('mobile-search-pop', 'animate-appear');">
            <div className="searchbox-14">
              <Search22 />
            </div>
          </a>
          <div className="dashboard-35 gotham-bold-eerie-black-22px">{dashboard}</div>
          <div className="welcome-6 opensans-normal-quick-silver-14px">{welcome}</div>
          <p className="brand-partner-president-club-1-1 manrope-bold-black-12px">{brandPartnerPresidentClub1}</p>
          <X3ColumnCTACards
            touchBoard1Props={x3ColumnCTACardsProps.touchBoard1Props}
            touchBoard2Props={x3ColumnCTACardsProps.touchBoard2Props}
            touchBoard3Props={x3ColumnCTACardsProps.touchBoard3Props}
          />
          <div className="overlap-group5-8">
            <div className="overlap-group-116" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="overlap-group2-31">
                <div className="growth-11">
                  <div className="x15-than-last-month-9 manrope-normal-turmeric-9px">
                    <span className="manrope-bold-turmeric-9px">{spanText1}</span>
                    <span className="opensans-normal-turmeric-5-5px">{spanText2}</span>
                  </div>
                </div>
                <div className="overlap-group1-61">
                  <div className="projects-completed-15 manrope-semi-bold-black-9px">{projectsCompleted}</div>
                  <div className="x4115-1 cairo-bold-black-28px">{x4115}</div>
                </div>
              </div>
              <img className="chart-2-5" src={chart2} />
            </div>
            <div className="group-container-1" style={{ backgroundImage: `url(${groupContainer})` }}>
              <div className="overlap-group1-62">
                <div className="overlap-group-117">
                  <div className="projects-in-progress-5 manrope-semi-bold-white-9px">{projectsInProgress}</div>
                  <div className="x182-3 cairo-bold-white-28px">{x182}</div>
                </div>
                <div className="growth-12">
                  <div className="x15-than-last-month-9 manrope-normal-white-9px">
                    <span className="manrope-bold-white-9px">{spanText3}</span>
                    <span className="opensans-normal-white-5-5px">{spanText4}</span>
                  </div>
                </div>
              </div>
              <div className="group-11-5">
                <div className="chart-34"></div>
                <div className="chart-35"></div>
                <div className="chart-36"></div>
                <div className="chart-37"></div>
                <div className="chart-38"></div>
                <div className="chart-39"></div>
              </div>
            </div>
            <div className="overlap-group4-13" style={{ backgroundImage: `url(${overlapGroup4})` }}>
              <div className="overlap-group1-63">
                <div className="upcoming-projects-5 manrope-semi-bold-black-9px">{upcomingProjects}</div>
                <div className="x1125-3 cairo-bold-black-28px">{x1125}</div>
              </div>
              <div className="chart-40" style={{ backgroundImage: `url(${chart})` }}>
                <div className="overlap-group-118" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                  <div className="percent-17 manrope-bold-black-7px">{percent}</div>
                </div>
              </div>
            </div>
            <div className="growth-13">
              <div className="x15-than-last-month-9 manrope-normal-black-9px">
                <span className="manrope-bold-black-9px">{spanText5}</span>
                <span className="opensans-normal-black-5-5px">{spanText6}</span>
              </div>
            </div>
          </div>
          <RankProgress />
          <img className="focus-u-mobile-1" src={focusuMobile} />
          <a href="https://nulifespangear.secureshopcart.com/" target="_blank">
            <img className="merch-tools-store-mobile2x-1" src={merchToolsStoreMobile2X} />
          </a>
          <TabbedContentMobile
            dEFAULTSTATE21Props={tabbedContentMobileProps.dEFAULTSTATE21Props}
            dEFAULTSTATE22Props={tabbedContentMobileProps.dEFAULTSTATE22Props}
            dEFAULTSTATE23Props={tabbedContentMobileProps.dEFAULTSTATE23Props}
          />
          <div className="overlap-group8-6">
            <div className="rectangle-18-1"></div>
            <img className="your-image-here-9" src={yourImageHere} />
            <img className="nu-life-span_-all-pr-1" src={nulifespan_AllProductsOnStands1000W} />
            <div className="on-sale-9 gotham-bold-eerie-black-20px">{onSale}</div>
            <div className="ongoing-15 manrope-normal-white-10px">{ongoing}</div>
            <a href="https://nulifespan.com/store-2/" target="_blank">
              <div className="button-withdraw-all-earning-25">
                <Group143 />
              </div>
            </a>
          </div>
          <EarningReport />
        </div>
      </div>
    </div>
  );
}

export default MobileDashboard;
