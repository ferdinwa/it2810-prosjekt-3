import React, { useState } from "react";
import { Jumbotron, Button, Form, FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { getPlayers } from "../actions/playerActions";
import Filter from "./Filter";
import "../css/searchbar.css";

//interface SearchBarProps {
//handleSubmit(e: React.FormEvent<HTMLFormElement>): void
//}

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Handled");

    e.preventDefault();
    getPlayers(name, dispatch);
  };

  return (
    <div>
      <Jumbotron className="jumbotron">
        <h1 className="display-3" text-align>
          FutHeader
        </h1>
        <hr className="my-2" />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              value={name}
              onChange={handleChange}
              id="inputplayer"
              placeholder="Search for FUT-player"
            />
          </FormGroup>
          <p className="lead">
            <Button color="primary" id="searchbutton" block>
              Search
            </Button>
          </p>
        </Form>
      </Jumbotron>
      <Filter />
    </div>
  );
};

/*const mapStateToProps = (state: IQueryReduxProps) => ({
  query: state.query
})*/

export default SearchBar;
