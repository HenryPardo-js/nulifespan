import React from "react";
import { Link } from "react-router-dom";
import Hamburgermenu from "../Hamburgermenu";
import Title22 from "../Title22";
import Pagination from "../Pagination";
import "./MobileMySales.css";

function MobileMySales(props) {
  const { logo, title22Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-sales screen">
        <div className="overlap-group1-38">
          <div className="nav-8">
            <Link to="/mobile-home-dashboard">
              <div className="logo-7" style={{ backgroundImage: `url(${logo})` }}></div>
            </Link>
            <Hamburgermenu />
          </div>
          <Title22 contacts={title22Props.contacts} />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default MobileMySales;
