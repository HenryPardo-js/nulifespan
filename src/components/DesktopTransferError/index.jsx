import React from "react";
import AddNewCardPopup from "../AddNewCardPopup";
import "./DesktopTransferError.css";

function DesktopTransferError(props) {
  const { overlapGroup3, addNewCardPopupProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-transfer-error screen">
        <div className="overlap-group3-14" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <AddNewCardPopup
            buttonSaveProps={addNewCardPopupProps.buttonSaveProps}
            tabNoteInfoProps={addNewCardPopupProps.tabNoteInfoProps}
            buttonSaveProps2={addNewCardPopupProps.buttonSaveProps2}
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopTransferError;
