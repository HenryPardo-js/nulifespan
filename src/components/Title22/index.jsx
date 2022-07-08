import React from "react";
import "./Title22.css";

function Title22(props) {
  const { contacts } = props;

  return (
    <div className="title-4">
      <div className="contacts-4 gotham-bold-eerie-black-22px">{contacts}</div>
      <div className="ic-list-view">
        <div className="grid-1">
          <div className="grid-layout-18">
            <img className="vector-151" src={require("../../static/img/vector-180@1x.png")} />
            <img className="vector-152" src={require("../../static/img/vector-178@1x.png")} />
            <img className="vector-153" src={require("../../static/img/vector-179@1x.png")} />
          </div>
        </div>
      </div>
      <div className="ic-gridview">
        <div className="thumbnail-1-1-1">
          <div className="layer-56-1">
            <div className="vector-container-28">
              <img className="vector-147" src={require("../../static/img/vector-181@1x.png")} />
              <img className="vector-148" src={require("../../static/img/vector-181@1x.png")} />
            </div>
            <div className="vector-container-30">
              <img className="vector-147" src={require("../../static/img/vector-181@1x.png")} />
              <img className="vector-148" src={require("../../static/img/vector-181@1x.png")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title22;
