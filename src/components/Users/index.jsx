import React from "react";
import Thumbnail1 from "../Thumbnail1";
import "./Users.css";

function Users(props) {
  const { thumbnail1Props } = props;

  return (
    <div className="users">
      <Thumbnail1 className={thumbnail1Props.className} />
    </div>
  );
}

export default Users;
