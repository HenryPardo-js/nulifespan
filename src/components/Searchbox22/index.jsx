import React from "react";
import Search2 from "../Search2";
import "./Searchbox22.css";

function Searchbox22(props) {
  const { search2Props } = props;

  return (
    <div className="searchbox-10">
      <Search2 vector2={search2Props.vector2} className={search2Props.className} />
      <div className="search-here-3 cairo-semi-bold-shady-lady-16px">Search team members</div>
    </div>
  );
}

export default Searchbox22;
