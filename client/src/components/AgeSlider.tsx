import React, { ChangeEvent } from "react";
import "../css/searchbar.css";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { setAge } from "../actions/ageActions";

const DropdownAge = () => {
  const dispatch = useDispatch();

  const handleChange = (age: number | number[]) => {
    dispatch(setAge(age.toString()));
  };
  return (
    <div className="filterbar slider">
      <Typography id="discrete-slider" className="typo" gutterBottom>
        Player older than:
      </Typography>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={15}
        max={80}
        onChange={(event, value) => handleChange(value)}
      />
    </div>
  );
};

export default DropdownAge;
