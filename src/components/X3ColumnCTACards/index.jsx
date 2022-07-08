import React from "react";
import TouchBoard from "../TouchBoard";
import "./X3ColumnCTACards.css";

function X3ColumnCTACards(props) {
  const { touchBoard1Props, touchBoard2Props, touchBoard3Props } = props;

  return (
    <div className="x3-column-cta-cards">
      <TouchBoard rewardsCash={touchBoard1Props.rewardsCash} x0={touchBoard1Props.x0} />
      <TouchBoard
        rewardsCash={touchBoard2Props.rewardsCash}
        x0={touchBoard2Props.x0}
        className={touchBoard2Props.className}
      />
      <TouchBoard
        rewardsCash={touchBoard3Props.rewardsCash}
        x0={touchBoard3Props.x0}
        className={touchBoard3Props.className}
      />
    </div>
  );
}

export default X3ColumnCTACards;
