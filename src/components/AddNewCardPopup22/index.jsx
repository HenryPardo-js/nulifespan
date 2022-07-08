import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import TabNoteInfo from "../TabNoteInfo";
import ButtonSave from "../ButtonSave";
import "./AddNewCardPopup22.css";

function AddNewCardPopup22(props) {
  const { className, buttonSaveProps, tabNoteInfoProps, buttonSaveProps2 } = props;

  return (
    <div className={`add-new-card-popup ${className || ""}`}>
      <div className="content-popup">
        <div className="flex-row-7">
          <div className="title-6">
            <div className="place manrope-bold-black-18px">Transfer</div>
          </div>
          <ButtonCloseCopy2 className={buttonSaveProps.className} />
        </div>
        <TabNoteInfo
          path1={tabNoteInfoProps.path1}
          path10={tabNoteInfoProps.path10}
          path3={tabNoteInfoProps.path3}
          path4={tabNoteInfoProps.path4}
          path8={tabNoteInfoProps.path8}
        />
        <div className="overlap-group4-7">
          <div className="name-on-card">
            <div className="username manrope-normal-black-15px">Username</div>
            <div className="overlap-group3-7 border-1px-cararra">
              <div className="login-name manrope-normal-shadow-blue-14px">
                ${"{"}LoginName{"}"}
              </div>
            </div>
            <p className="before-you-can-make manrope-medium-mine-shaft-14px">
              Before you can make a transfer/withdrawal, Please make sure you have completed <br />
              the following steps.
            </p>
            <div className="overlap-group2-15">
              <p className="reach-a-minimum-of manrope-medium-mine-shaft-14px">
                • Reach a minimum of 50 points/dollars in your available rewards cash balance.
              </p>
              <img className="nu-life_2creditcards" src={require("../../static/img/nulife-2creditcards-1@1x.png")} />
            </div>
          </div>
          <ButtonSave>{buttonSaveProps2.children}</ButtonSave>
        </div>
      </div>
    </div>
  );
}

export default AddNewCardPopup22;
