import React from "react";
import "./Thumbnail1.css";

function Thumbnail1(props) {
  const { className } = props;

  return (
    <div className={`thumbnail-1 ${className || ""}`}>
      <div className="layer-56">
        <div className="vector-container-2">
          <img className="vector-109" src={require("../../static/img/vector-108@1x.png")} alt="" />
          <img className="vector-110" src={require("../../static/img/vector-109@1x.png")} />
        </div>
        <div className="vector-container-3">
          <img className="vector-111" src={require("../../static/img/vector-109@1x.png")} />
          <img className="vector-112" src={require("../../static/img/vector-108@1x.png")} />
        </div>
      </div>
    </div>
  );
}

export default Thumbnail1;
