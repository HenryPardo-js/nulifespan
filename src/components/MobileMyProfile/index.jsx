import React from "react";
import { Link } from "react-router-dom";
import Hamburgermenu from "../Hamburgermenu";
import "./MobileMyProfile.css";

function MobileMyProfile(props) {
  const {
    logo,
    contacts,
    addFriend2,
    superAdmin1,
    dashboard1,
    levelStatusCusto,
    iconCall,
    phone,
    superAdmin2,
    iconMail,
    email,
    superAdmin3,
    dashboard2,
    sampleNulifespanCom,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-profile screen">
        <div className="overlap-group-91">
          <div className="nav-14">
            <Link to="/mobile-home-dashboard">
              <div className="logo-9" style={{ backgroundImage: `url(${logo})` }}></div>
            </Link>
            <Hamburgermenu />
          </div>
          <div className="title-9">
            <div className="contacts-8 gotham-bold-eerie-black-22px">{contacts}</div>
          </div>
          <a href="javascript:ShowOverlay('mobile-upload-avatar', 'animate-appear');">
            <div className="group-20-1">
              <img className="add-friend-2-4" src={addFriend2} />
            </div>
          </a>
          <a href="javascript:ShowOverlay('mobile-upload-avatar', 'animate-appear');">
            <div className="super-admin-13 manrope-normal-royal-blue-14px">{superAdmin1}</div>
          </a>
          <div className="group-23-1">
            <div className="dashboard-28 gotham-bold-eerie-black-34px">{dashboard1}</div>
            <p className="level-status-custo-2 manrope-normal-quick-silver-12px">{levelStatusCusto}</p>
            <div className="flex-row-11">
              <img className="icon-call-2" src={iconCall} />
              <div className="phone-2 manrope-normal-quick-silver-12px">{phone}</div>
              <a
                href="javascript:ShowOverlay('mobile-edit-cell-number', 'animate-appear');"
                className="align-self-flex-end"
              >
                <div className="super-admin-14 manrope-normal-royal-blue-14px">{superAdmin2}</div>
              </a>
            </div>
            <div className="flex-row-12">
              <img className="icon-mail" src={iconMail} />
              <div className="email-6 manrope-normal-quick-silver-12px">{email}</div>
              <a href="javascript:ShowOverlay('mobile-edit-email', 'animate-appear');" className="align-self-flex-end">
                <div className="super-admin-15 manrope-normal-royal-blue-14px">{superAdmin3}</div>
              </a>
            </div>
            <div className="dashboard-29 manrope-bold-eerie-black-20px">{dashboard2}</div>
            <div className="samplenulifespancom-3 manrope-normal-quick-silver-18px">{sampleNulifespanCom}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMyProfile;
