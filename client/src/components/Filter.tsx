import React from "react";
import PositionSelect from "./PositionSelect";
import ClubSelect from "./ClubSelect";
import NationSelect from "./NationSelect";
import SortAge from "./SortAge";

import "../css/searchbar.css";

const Filter = () => {
  console.log("Hei");
  return (
    <div className="filtercontainer">
      <PositionSelect />
      <ClubSelect />
      <NationSelect />
      <SortAge />
    </div>
  );
};

export default Filter;
