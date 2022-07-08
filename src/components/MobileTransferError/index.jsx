import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import Title from "../Title";
import TabNoteInfo2 from "../TabNoteInfo2";
import ButtonSave from "../ButtonSave";
import "./MobileTransferError.css";

function MobileTransferError(props) {
  const {
    havingTroubleEmai,
    somethingIsNotQui,
    youHaveNotReach,
    orAnErrorHasO,
    buttonCloseCopy2Props,
    titleProps,
    titleProps2,
    buttonSaveProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-transfer-error screen">
        <div className="add-new-card-popup-3">
          <div className="content-popup-5">
            <div className="overlap-group3-17">
              <div className="bg-copy-4">
                <div className="having-trouble-emai-2">{havingTroubleEmai}</div>
              </div>
              <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
              <Title className={titleProps.className} />
              <TabNoteInfo2 className={titleProps2.className} />
              <div className="name-on-card-3 manrope-medium-mine-shaft-12px">
                <p className="something-is-not-qui-2">{somethingIsNotQui}</p>
                <div className="overlap-group2-27">
                  <p className="you-have-not-reach-2">{youHaveNotReach}</p>
                  <p className="or-an-error-has-o-2">{orAnErrorHasO}</p>
                </div>
              </div>
              <ButtonSave className={buttonSaveProps.className}>{buttonSaveProps.children}</ButtonSave>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTransferError;
