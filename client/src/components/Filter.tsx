import React from "react";
import PositionSelect from "./PositionSelect";
import ClubSelect from "./ClubSelect";
import NationSelect from "./NationSelect";
import SortAge from "./SortAge";
import SortScore from "./SortScore";

import "../css/searchbar.css";

//filtering on different attributes
const Filter = () => {
  return (
    <div className="filtercontainer">
      <PositionSelect />
      <ClubSelect />
      <NationSelect />
      <SortAge />
      <SortScore />
    </div>
  );
};

export default Filter;
