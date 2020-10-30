import React from "react";
import "../css/searchbar.css";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import { getScore } from "../actions/scoreAction";

const SortScore = () => {
  const dispatch = useDispatch();
  const handleClick = (num: number) => {
    console.log(num);
    dispatch(getScore(num));
  };

  return (
    <div className="sortelement">
      <FormGroup className="filtercontainer">
        <legend>Sort on userscore: </legend>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio2" onClick={() => handleClick(0)} />{" "}
            No sorting
          </Label>
        </FormGroup>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio2" onClick={() => handleClick(1)} />{" "}
            Ascending
          </Label>
        </FormGroup>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio2" onClick={() => handleClick(-1)} />{" "}
            Descending
          </Label>
        </FormGroup>
      </FormGroup>
    </div>
  );
};

export default SortScore;
