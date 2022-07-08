import React from "react";
import Users from "../Users";
import "./X03.css";

function X03(props) {
  const { usersProps } = props;

  return (
    <div className="x03-1">
      <Users thumbnail1Props={usersProps.thumbnail1Props} />
      <div className="contacts-2 manrope-medium-quick-silver-18px">My Sales</div>
    </div>
  );
}

export default X03;
