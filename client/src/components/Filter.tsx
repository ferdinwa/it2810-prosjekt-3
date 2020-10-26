import React from "react";
import DropdownPosition from "./DropdownPosition";
import DropdownClub from "./DropdownClub";
import DropdownNation from "./DropdownNation";
import DropdownAge from "./DropdownAge";

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
