import React from "react";
import { Link } from "react-router-dom";
import Hamburgermenu from "../Hamburgermenu";
import Title22 from "../Title22";
import Pagination from "../Pagination";
import "./MobileMyTeam.css";

function MobileMyTeam(props) {
  const { logo, title22Props, paginationProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-team screen">
        <div className="overlap-group1-40">
          <div className="nav-10">
            <Link to="/mobile-home-dashboard">
              <div className="logo-8" style={{ backgroundImage: `url(${logo})` }}></div>
            </Link>
            <Hamburgermenu />
          </div>
          <Title22 contacts={title22Props.contacts} />
          <Pagination className={paginationProps.className} />
        </div>
      </div>
    </div>
  );
}

export default MobileMyTeam;
