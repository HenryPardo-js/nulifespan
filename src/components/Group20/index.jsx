import React from "react";
import "./Group20.css";

function Group20(props) {
  const { className } = props;

  return (
    <div className={`group-20-2 ${className || ""}`}>
      <img className="add-friend-2-5" src={require("../../static/img/add-friend-2-2@1x.png")} />
    </div>
  );
}

export default Group20;
