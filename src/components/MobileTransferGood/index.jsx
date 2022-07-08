import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import TabNoteInfo2 from "../TabNoteInfo2";
import ButtonSave from "../ButtonSave";
import "./MobileTransferGood.css";

function MobileTransferGood(props) {
  const {
    place,
    username,
    loginname,
    beforeYouCanMake,
    reachAMinimumOf,
    nulife_2Creditcards,
    buttonCloseCopy2Props,
    buttonSaveProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-transfer-good screen">
        <div className="add-new-card-popup-1">
          <div className="content-popup-2">
            <div className="flex-row-9">
              <div className="title-8">
                <div className="place-2 manrope-bold-black-18px">{place}</div>
              </div>
              <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            </div>
            <TabNoteInfo2 />
            <div className="name-on-card-2">
              <div className="username-2">{username}</div>
              <div className="overlap-group2-17 border-1px-cararra">
                <div className="login-name-2">{loginname}</div>
              </div>
              <p className="before-you-can-make-2 manrope-medium-mine-shaft-12px">{beforeYouCanMake}</p>
              <p className="reach-a-minimum-of-2 manrope-medium-mine-shaft-12px">{reachAMinimumOf}</p>
              <img className="nu-life_2creditcards-2" src={nulife_2Creditcards} />
            </div>
            <ButtonSave className={buttonSaveProps.className}>{buttonSaveProps.children}</ButtonSave>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTransferGood;
