import React from "react";
import AddNewCardPopup22 from "../AddNewCardPopup22";
import "./TabletTransferGood.css";

function TabletTransferGood(props) {
  const { tabletTransferGood, addNewCardPopup2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-transfer-good-1 screen" style={{ backgroundImage: `url(${tabletTransferGood})` }}>
        <AddNewCardPopup22
          className={addNewCardPopup2Props.className}
          buttonSaveProps={addNewCardPopup2Props.buttonSaveProps}
          tabNoteInfoProps={addNewCardPopup2Props.tabNoteInfoProps}
          buttonSaveProps2={addNewCardPopup2Props.buttonSaveProps2}
        />
      </div>
    </div>
  );
}

export default TabletTransferGood;
