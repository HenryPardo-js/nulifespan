import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import Group20 from "../Group20";
import "./TabletUploadAvatar.css";

function TabletUploadAvatar(props) {
  const {
    tabletUploadAvatar,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    changeProfilePicture,
    buttonWithdrawAllEarningProps,
    group20Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-upload-avatar screen" style={{ backgroundImage: `url(${tabletUploadAvatar})` }}>
        <div className="overlap-group3-13">
          <div className="rectangle-17-1"></div>
          <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
            {buttonWithdrawAllEarningProps.children}
          </ButtonWithdrawAllEarning>
          <Group20 className={group20Props.className} />
          <div className="overlap-group2-22">
            <div className="active-5">
              <div className="input-5">
                <div className="input-box-5 gotham-bold-cloud-16px">{inputBox}</div>
                <div className="overlap-group-94 border-1px-quick-silver">
                  <div className="input-here-9 manrope-normal-eerie-black-16px">{inputHere1}</div>
                </div>
                <p className="input-here-10 manrope-normal-eerie-black-12px">{inputHere2}</p>
              </div>
            </div>
            <div className="overlap-group1-52">
              <div className="rectangle-19-2 border-0-5px-dove-gray"></div>
              <div className="input-here-11 manrope-semi-bold-eerie-black-16px">{inputHere3}</div>
            </div>
          </div>
          <div className="change-profile-picture-2 montserrat-bold-eerie-black-24px">{changeProfilePicture}</div>
        </div>
      </div>
    </div>
  );
}

export default TabletUploadAvatar;
