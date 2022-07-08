import React from "react";
import Search2 from "../Search2";
import "./Searchbox.css";

function Searchbox(props) {
  const { className, search2Props } = props;

  return (
    <div className={`searchbox ${className || ""}`}>
      <Search2 vector2={search2Props.vector2} className={search2Props.className} />
      <div className="search-here cairo-semi-bold-shady-lady-16px">Search team members</div>
    </div>
  );
}

export default Searchbox;
