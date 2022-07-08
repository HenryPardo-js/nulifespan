import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import "./MobileUploadAvatar.css";

function MobileUploadAvatar(props) {
  const {
    addFriend2,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    changeProfilePicture,
    buttonWithdrawAllEarningProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-upload-avatar screen">
        <div className="overlap-group3-12">
          <div className="rectangle-17"></div>
          <div className="button-withdraw-all-earning-12">
            <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
              {buttonWithdrawAllEarningProps.children}
            </ButtonWithdrawAllEarning>
          </div>
          <div className="group-20-4">
            <img className="add-friend-2-7" src={addFriend2} />
          </div>
          <div className="overlap-group2-21">
            <div className="active-4">
              <div className="input-4">
                <div className="input-box-4 gotham-bold-cloud-16px">{inputBox}</div>
                <div className="overlap-group-93 border-1px-quick-silver">
                  <div className="input-here-6 manrope-normal-eerie-black-16px">{inputHere1}</div>
                </div>
                <p className="input-here-7 manrope-normal-eerie-black-10px">{inputHere2}</p>
              </div>
            </div>
            <div className="overlap-group1-51">
              <div className="rectangle-19-1 border-0-5px-dove-gray"></div>
              <div className="input-here-8 manrope-semi-bold-eerie-black-16px">{inputHere3}</div>
            </div>
          </div>
          <div className="change-profile-picture-1 montserrat-bold-eerie-black-24px">{changeProfilePicture}</div>
        </div>
      </div>
    </div>
  );
}

export default MobileUploadAvatar;
