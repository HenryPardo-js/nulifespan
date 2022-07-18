import React,{useState} from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Icons from "../Icons";
import Profile from "../Profile";
import Header3 from "../Header3";
import Dashboard1 from "../Dashboard1";
import X03 from "../X03";
import "./DesktopMyConnections.css";
import imagen from "../../static/img/layer-2-10@1x.png";
import imagen2 from "../../static/img/left-menu-ad1-1@1x.png";
import imagen3 from "../../static/img/path-38-1@1x.png";
import imagen4 from "../../static/img/bg-3@1x.png";
import fbGray from "./fb-gray.png";
import Instagram from "./im.png";

function DesktopMyConnections(props) {
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

  const [fb,setFb]=useState(false);
  const [im,setIm]=useState(false);
  const [db,setDb]=useState(true);

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
                <Link to="/">
                  <div className="x01-14">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                    <div className="dashboard-13 manrope-medium-white-18px">{dashboard1}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-connections">
                  <div className="x02-7" onClick={()=>{setFb(false);setIm(false);setDb(true)}} >
                    <div className="proposal-3" style={{ backgroundImage: `url(${imagen})` }}></div>
                    <div className="projects-3 manrope-medium-quick-silver-18px">{projects}</div>
                  </div>
                </Link>
                <div className="x02-7" onClick={()=>{setFb(true);setIm(false);setDb(false)}}>
                  <div className="proposal-3" style={{ backgroundImage: `url(${fbGray})` }}></div>
                  <div className="projects-3 manrope-medium-quick-silver-18px">Facebook</div>
                </div>
                <div className="x02-7" onClick={()=>{setFb(false);setIm(true);setDb(false)}}>
                  <div className="proposal-3" style={{ backgroundImage: `url(${Instagram})` }}></div>
                  <div className="projects-3 manrope-medium-quick-silver-18px">Instagram</div>
                </div>
                
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
          {
            fb &&(<div className="dashboard-11 gotham-bold-eerie-black-34px">
            <div className="h_iframe">
                <iframe src="https://my.workinglive.biz/store/63894032?hide_visit_storefront_menu=true&hide_profile_header=true&hide_back_button=true&hide_page_header=true&hide_help_menu=true&hide_profile_menu=true&hide_footer=true&hide_staff_accounts_header_menu=true&hide_vertical_navigation_menu=true#fb-shops" ></iframe>

                
              </div>
            </div>)
          }
          {
            im&&(
              <div className="dashboard-11 gotham-bold-eerie-black-34px">
                <div className="h_iframe">
                  <iframe src="https://my.workinglive.biz/store/63894032?hide_visit_storefront_menu=true&hide_profile_header=true&hide_back_button=true&hide_page_header=true&hide_help_menu=true&hide_profile_menu=true&hide_footer=true&hide_staff_accounts_header_menu=true&hide_vertical_navigation_menu=true#instagram" ></iframe>

                  
                </div>
              </div>
            )
          }
          {
            db&&(
              <div className="dashboard-11 gotham-bold-eerie-black-34px">
                <div className="h_iframe">
                  <iframe src="https://my.workinglive.biz/store/63894032?hide_visit_storefront_menu=true&hide_profile_header=true&hide_back_button=true&hide_page_header=true&hide_help_menu=true&hide_profile_menu=true&hide_footer=true&hide_staff_accounts_header_menu=true&hide_vertical_navigation_menu=true#dashboard:wizard=tiles" ></iframe>

                  
                </div>
              </div>
            )
          }
          {/* <div className="dashboard-11 gotham-bold-eerie-black-34px">
            <div className="h_iframe">
              <iframe src="https://my.workinglive.biz/store/63894032?hide_visit_storefront_menu=true&hide_profile_header=true&hide_back_button=true&hide_page_header=true&hide_help_menu=true&hide_profile_menu=true&hide_footer=true&hide_staff_accounts_header_menu=true&hide_vertical_navigation_menu=true#dashboard:wizard=tiles" ></iframe>

              
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DesktopMyConnections;
