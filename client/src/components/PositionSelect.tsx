import React from "react";
import "../css/searchbar.css";
import { setPosition } from "../actions/positionActions";
import { useDispatch } from "react-redux";
import Select from "react-select";

const DropdownPosition = () => {
  const dispatch = useDispatch();

  const optionPosition = [
    { value: "", label: "All positions" },
    { value: "GK", label: "Goalkeeper" },
    { value: "RB", label: "Right Back" },
    { value: "CB", label: "Center Back" },
    { value: "LB", label: "Left Back" },
    { value: "CDM", label: "Central Defensive Midfielder" },
    { value: "RM", label: "Right Midfielder" },
    { value: "CM", label: "Central Midfielder" },
    { value: "LM", label: "Left Midfielder" },
    { value: "CAM", label: "Central Attacking Midfielder" },
    { value: "RW", label: "Right Wing" },
    { value: "LW", label: "Left Wing" },
    { value: "CF", label: "Center Forward" },
    { value: "ST", label: "Striker" },
  ];

  const handleClick = (pos: string) => {
    dispatch(setPosition(pos));
  };

  return (
    <div className="filterbar">
      <Select
        options={optionPosition}
        placeholder="Select position"
        onChange={(value: any) => handleClick(value.value)}
        autoFocus
      >
        {" "}
      </Select>
    </div>
  );
};

export default DropdownPosition;
