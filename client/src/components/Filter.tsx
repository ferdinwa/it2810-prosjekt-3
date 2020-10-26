import React from "react";
import DropdownPosition from "./PositionSelect";
import DropdownClub from "./ClubSelect";
import DropdownNation from "./NationSelect";
import DropdownAge from "./AgeSlider";

import "../css/searchbar.css";

const Filter = () => {
  return (
    <div className="filtercontainer">
      <DropdownPosition />
      <DropdownClub />
      <DropdownNation />
      <DropdownAge />
    </div>
  );
};

export default Filter;
