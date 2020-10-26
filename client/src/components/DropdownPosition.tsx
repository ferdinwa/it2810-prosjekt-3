import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../css/searchbar.css";
import { getPosition } from "../actions/positionActions";

const DropdownPosition = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="filterbar">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="button" caret>
          Position
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header> Keeper</DropdownItem>
          <DropdownItem onClick={() => getPosition("GK")}>GK</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header> Defender</DropdownItem>
          <DropdownItem onClick={() => getPosition("RWD")}>RWB </DropdownItem>
          <DropdownItem onClick={() => getPosition("RB")}>RB</DropdownItem>
          <DropdownItem onClick={() => getPosition("CB")}>CB</DropdownItem>
          <DropdownItem onClick={() => getPosition("LB")}>LB</DropdownItem>
          <DropdownItem onClick={() => getPosition("LWB")}>LWB</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header> Midfielder</DropdownItem>
          <DropdownItem onClick={() => getPosition("CDM")}>CDM</DropdownItem>
          <DropdownItem onClick={() => getPosition("CM")}>CM</DropdownItem>
          <DropdownItem onClick={() => getPosition("RM")}>RM</DropdownItem>
          <DropdownItem onClick={() => getPosition("LM")}>LM</DropdownItem>
          <DropdownItem onClick={() => getPosition("CAM")}>CAM</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header> Attacker</DropdownItem>
          <DropdownItem onClick={() => getPosition("RM")}>RW</DropdownItem>
          <DropdownItem onClick={() => getPosition("LW")}>LW</DropdownItem>
          <DropdownItem onClick={() => getPosition("RF")}>RF</DropdownItem>
          <DropdownItem onClick={() => getPosition("CF")}>CF</DropdownItem>
          <DropdownItem onClick={() => getPosition("LF")}>LF</DropdownItem>
          <DropdownItem onClick={() => getPosition("S")}>S</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownPosition;
