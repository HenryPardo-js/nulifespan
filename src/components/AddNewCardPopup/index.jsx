import React from "react";
import Title from "../Title";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import TabNoteInfo from "../TabNoteInfo";
import ButtonSave from "../ButtonSave";
import "./AddNewCardPopup.css";

function AddNewCardPopup(props) {
  const { buttonSaveProps, tabNoteInfoProps, buttonSaveProps2 } = props;

  return (
    <div className="add-new-card-popup-2">
      <div className="content-popup-3">
        <div className="flex-row-19">
          <Title />
          <ButtonCloseCopy2 className={buttonSaveProps.className} />
        </div>
        <TabNoteInfo
          path1={tabNoteInfoProps.path1}
          path10={tabNoteInfoProps.path10}
          path3={tabNoteInfoProps.path3}
          path4={tabNoteInfoProps.path4}
          path8={tabNoteInfoProps.path8}
        />
        <p className="something-is-not-qui manrope-medium-mine-shaft-14px">
          Something is not quite right. Before you can make a transfer/withdrawal, <br />
          please be sure you have completed the following steps.
        </p>
        <div className="overlap-group2-23 manrope-medium-mine-shaft-14px">
          <p className="you-have-not-reach">
            • You have not reached the minimum of 50 points/dollars in your <br />
            &nbsp;&nbsp;&nbsp;&nbsp;available rewards cash balance. Please return to the dashboard.
          </p>
          <p className="or-an-error-has-o">
            OR
            <br />
            <br />• An error has occurred connecting your payment card . Please visit the FAQ page
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;to learn more.
          </p>
        </div>
        <div className="flex-row-20">
          <div className="having-trouble-emai manrope-normal-shadow-blue-11px">
            Having Trouble? Email support@nulifespan.com
          </div>
          <ButtonSave className={buttonSaveProps2.className}>{buttonSaveProps2.children}</ButtonSave>
        </div>
      </div>
    </div>
  );
}

export default AddNewCardPopup;
