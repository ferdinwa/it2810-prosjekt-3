import React, { useState } from "react";
import { Jumbotron, Button, Form, FormGroup, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../actions/playerActions";
import Filter from "./Filter";
import "../css/searchbar.css";
import { setQuery } from "../actions/queryActions";
import { IAppState } from "../interfaces";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  //set local state name to whatever the user is typing in the searchbar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  //on submit, get players from database and set global state query
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getPlayers(name, pos, nat, clu, ag, scor, dispatch, 10, 0);
    setQuery(name);
  };

  //get global state variables
  const pos = useSelector((state: IAppState) => state.position);
  const nat = useSelector((state: IAppState) => state.nation);
  const clu = useSelector((state: IAppState) => state.club);
  const ag = useSelector((state: IAppState) => state.age);
  const scor = useSelector((state: IAppState) => state.score);

  return (
    <div data-testid="jumbotron">
      <Jumbotron className="jumbotron">
        <h1 className="display-3 header" text-align>
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
            <Filter />
            <Button color="primary" id="searchbutton" block>
              Search
            </Button>
          </p>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default SearchBar;
