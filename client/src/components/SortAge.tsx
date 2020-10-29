import React from "react";
import "../css/searchbar.css";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button, FormGroup, Label, Input } from "reactstrap";
import { setAge } from "../actions/ageActions";

const SortAge = () => {
  const dispatch = useDispatch();
  const handleClick = (num: number) => {
    dispatch(setAge(num));
  };

  return (
    <div className="sortcontainer">
      <FormGroup className="filtercontainer">
        <legend>Sort on age: </legend>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio1" onClick={() => handleClick(0)} />{" "}
            No Sort
          </Label>
        </FormGroup>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio1" onClick={() => handleClick(1)} />{" "}
            ASC
          </Label>
        </FormGroup>
        <FormGroup check className="sort">
          <Label check>
            <Input type="radio" name="radio1" onClick={() => handleClick(-1)} />{" "}
            DESC
          </Label>
        </FormGroup>
      </FormGroup>
    </div>
  );
};

export default SortAge;
