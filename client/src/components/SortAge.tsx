import React from "react";
import "../css/searchbar.css";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { setAge } from "../actions/ageActions";

const SortAge = () => {
  const dispatch = useDispatch();
  const handleClick = (num: number) => {
    dispatch(setAge(num));
  };

  return (
    <div className="sortelement">
      <FormGroup className="filtercontainer">
        <legend>Sort on age: </legend>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio1" onClick={() => handleClick(0)} />{" "}
            No sorting
          </Label>
        </FormGroup>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio1" onClick={() => handleClick(1)} />{" "}
            Ascending
          </Label>
        </FormGroup>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio1" onClick={() => handleClick(-1)} />{" "}
            Descending
          </Label>
        </FormGroup>
      </FormGroup>
    </div>
  );
};

export default SortAge;
