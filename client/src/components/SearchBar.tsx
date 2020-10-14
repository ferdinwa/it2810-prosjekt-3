import React from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface SearchBarProps {
}

const SearchBar = () => {
  
    return (
    <div>
      <Jumbotron>
        <h1 className="display-3" text-align>FutHeader</h1>
        <hr className="my-2" />
        <Form>
            <FormGroup >
                <Input type="email" name="email" id="inputplayer" placeholder="Search for FUT-player" />
            </FormGroup>
        <p className="lead">
          <Button color="primary" id="searchbutton" block>Search</Button>
        </p>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default SearchBar

