import React from "react";
import Group20 from "../Group20";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import "./DesktopUploadAvatar.css";

function DesktopUploadAvatar(props) {
  const {
    desktopUploadAvatar,
    overlapGroup3,
    changeProfilePicture,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    buttonWithdrawAllEarningProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-upload-avatar screen" style={{ backgroundImage: `url(${desktopUploadAvatar})` }}>
        <div className="overlap-group3-11" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <div className="change-profile-picture">{changeProfilePicture}</div>
          <div className="group-28">
            <Group20 />
            <div className="flex-col-1">
              <div className="overlap-group2-20">
                <div className="active-3">
                  <div className="input-3">
                    <div className="input-box-3 gotham-bold-cloud-16px">{inputBox}</div>
                    <div className="overlap-group-92 border-1px-quick-silver">
                      <div className="input-here-3 manrope-normal-eerie-black-16px">{inputHere1}</div>
                    </div>
                    <p className="input-here-4 manrope-normal-eerie-black-10px">{inputHere2}</p>
                  </div>
                </div>
                <div className="overlap-group1-50">
                  <div className="rectangle-19 border-0-5px-dove-gray"></div>
                  <div className="input-here-5 manrope-semi-bold-eerie-black-16px">{inputHere3}</div>
                </div>
              </div>
              <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
                {buttonWithdrawAllEarningProps.children}
              </ButtonWithdrawAllEarning>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopUploadAvatar;
