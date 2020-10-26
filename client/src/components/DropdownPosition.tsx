import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../css/searchbar.css";
import { setPosition } from "../actions/positionActions";
import { useDispatch } from "react-redux";

const DropdownPosition = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const dispatch = useDispatch();

  const handleClick = (pos: string) => {
    dispatch(setPosition(pos));
  };

  return (
    <div className="filterbar">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="button" caret>
          Position
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleClick("")}>
            All positions
          </DropdownItem>
          <DropdownItem divider> </DropdownItem>
          <DropdownItem onClick={() => handleClick("GK")}>GK</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header> Defender</DropdownItem>
          <DropdownItem onClick={() => handleClick("RWB")}>RWB </DropdownItem>
          <DropdownItem onClick={() => handleClick("RB")}>RB</DropdownItem>
          <DropdownItem onClick={() => handleClick("CB")}>CB</DropdownItem>
          <DropdownItem onClick={() => handleClick("LB")}>LB</DropdownItem>
          <DropdownItem onClick={() => handleClick("LWB")}>LWB</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header> Midfielder</DropdownItem>
          <DropdownItem onClick={() => handleClick("CDM")}>CDM</DropdownItem>
          <DropdownItem onClick={() => handleClick("CM")}>CM</DropdownItem>
          <DropdownItem onClick={() => handleClick("RM")}>RM</DropdownItem>
          <DropdownItem onClick={() => handleClick("LM")}>LM</DropdownItem>
          <DropdownItem onClick={() => handleClick("CAM")}>CAM</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header> Attacker</DropdownItem>
          <DropdownItem onClick={() => handleClick("RW")}>RW</DropdownItem>
          <DropdownItem onClick={() => handleClick("LW")}>LW</DropdownItem>
          <DropdownItem onClick={() => handleClick("RF")}>RF</DropdownItem>
          <DropdownItem onClick={() => handleClick("CF")}>CF</DropdownItem>
          <DropdownItem onClick={() => handleClick("LF")}>LF</DropdownItem>
          <DropdownItem onClick={() => handleClick("ST")}>S</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownPosition;
