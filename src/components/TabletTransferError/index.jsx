import React from "react";
import AddNewCardPopup from "../AddNewCardPopup";
import "./TabletTransferError.css";

function TabletTransferError(props) {
  const { overlapGroup3, addNewCardPopupProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-transfer-error-1 screen">
        <div className="overlap-group3-16" style={{ backgroundImage: `url(${overlapGroup3})` }}>
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

export default TabletTransferError;
