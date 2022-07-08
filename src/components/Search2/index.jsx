import React from "react";
import "./Search2.css";

function Search2(props) {
  const { vector2, className } = props;

  return (
    <div className={`search-2 ${"search-2-1" || ""}`} style={{paddingLeft:20}}>
      <div className="vector-container">
        <img className="vector-2" src={require("../../static/img/vector-101@1x.png")} />
        <img className="vector-3" src={require("../../static/img/vector-102@1x.png")} />
      </div>
    </div>
  );
}

export default Search2;
