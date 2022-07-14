import React,{useState, useEffect} from "react";
import {getUser} from "./api/info";
import "./Profile.css";

function Profile() {
  const [dataUser, setdataUser]=useState(null);
  useEffect(() => {
    (async () => {
      const response = await getUser("jd@nulifespan.com");
      console.log(response);
      setdataUser(response[0]);
    })();
  }, []);
  return (
    <div className="profile-1">
      <div className="overlap-group-24">
        <div className="name-1 cairo-bold-eerie-black-16px">{dataUser==null?"User":(dataUser["firstName"])}</div>
        <div className="super-admin cairo-normal-stack-14px">{dataUser==null?"Brand Partner":(dataUser["lastName"])}</div>
      </div>
      {/* <img className="arrow-6" src={require("../../static/img/arrow-1@1x.png")} /> */}
    </div>
  );
}

export default Profile;
