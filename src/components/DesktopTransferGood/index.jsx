import React from "react";
import AddNewCardPopup22 from "../AddNewCardPopup22";
import "./DesktopTransferGood.css";

function DesktopTransferGood(props) {
  const { desktopTransferGood, addNewCardPopup2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-transfer-good screen" style={{ backgroundImage: `url(${desktopTransferGood})` }}>
        <AddNewCardPopup22
          buttonSaveProps={addNewCardPopup2Props.buttonSaveProps}
          tabNoteInfoProps={addNewCardPopup2Props.tabNoteInfoProps}
          buttonSaveProps2={addNewCardPopup2Props.buttonSaveProps2}
        />
      </div>
    </div>
  );
}

export default DesktopTransferGood;
