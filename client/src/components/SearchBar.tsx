import React, { useState } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect, useDispatch} from 'react-redux'
import { setQuery } from '../actions/queryActions';
import { IQueryReduxProps, ISearchBar } from '../interfaces'
import { getPlayers } from '../actions/playerActions';

//interface SearchBarProps {
  //handleSubmit(e: React.FormEvent<HTMLFormElement>): void
//}

const SearchBar = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Handled");
    
    e.preventDefault()
    getPlayers(name, dispatch)
  } 
  
    return (
    <div>
      <Jumbotron>
        <h1 className="display-3" text-align>FutHeader</h1>
        <hr className="my-2" />
        <Form onSubmit={handleSubmit}>
            <FormGroup >
                <Input type="text" value={name} onChange={handleChange} id="inputplayer" placeholder="Search for FUT-player" />
            </FormGroup>
        <p className="lead">
          <Button color="primary" id="searchbutton" block>Search</Button>
        </p>
        </Form>
      </Jumbotron>
    </div>
  );
};

/*const mapStateToProps = (state: IQueryReduxProps) => ({
  query: state.query
})*/

export default SearchBar


