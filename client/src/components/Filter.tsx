import React from "react";
import DropdownPosition from "./PositionSelect";
import DropdownClub from "./ClubSelect";
import DropdownNation from "./NationSelect";
import SortAge from "./SortAge";

import "../css/searchbar.css";

const Filter = () => {
  console.log("Hei");
  return (
    <div className="filtercontainer">
      <DropdownPosition />
      <DropdownClub />
      <DropdownNation />
      <SortAge />
    </div>
  );
};

export default Filter;
