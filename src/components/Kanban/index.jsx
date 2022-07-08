import React from "react";
import Thumbnail1 from "../Thumbnail1";
import "./Kanban.css";

function Kanban(props) {
  const { thumbnail1Props } = props;

  return (
    <div className="kanban-1">
      <Thumbnail1 className={thumbnail1Props.className} />
    </div>
  );
}

export default Kanban;
