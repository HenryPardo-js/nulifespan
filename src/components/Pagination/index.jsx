import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const { className } = props;

  return (
    <div className={`pagination ${className || ""}`}>
      <div className="btn-prev border-1px-silver-sand">
        <div className="ic_chevron">
          <div className="vector-container-35">
            <img className="vector-157" src={require("../../static/img/vector-185@1x.png")} />
            <img className="vector-158" src={require("../../static/img/vector-186@1x.png")} />
          </div>
        </div>
      </div>
      <div className="number-20">
        <div className="overlap-group-81">
          <div className="background-13 border-1px-silver-sand"></div>
          <div className="selected-page"></div>
          <div className="number-21 poppins-bold-white-18px">1</div>
          <div className="number-22 poppins-medium-eerie-black-18px">2</div>
          <div className="number-23 poppins-medium-eerie-black-18px">3</div>
          <div className="number-24 poppins-medium-eerie-black-18px">4</div>
        </div>
      </div>
      <div className="btn-next border-1px-silver-sand">
        <div className="ic_chevron-1">
          <div className="vector-container-35">
            <img className="vector-159" src={require("../../static/img/vector-187@1x.png")} />
            <img className="vector-160" src={require("../../static/img/vector-188@1x.png")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
