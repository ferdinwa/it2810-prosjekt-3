import React, {useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from "reactstrap";
import { useSelector } from "react-redux";
import {
  IPlayer,
  IPlayerReduxProps,
  IAppState,
} from "../interfaces";
import '../css/scroller.css'
import {useDispatch} from 'react-redux'
import { getPlayers } from "../actions/playerActions";


const Scroller = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [nation, setNation] = useState("");
  const [club, setClub] = useState("");
  const [rating, setRating] = useState(0);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch();

  const toggle = (
    playername: string,
    playerage: string,
    playerposition: string,
    playernation: string,
    playerclub: string,
    rating: number,
  ) => {
    setName(playername);
    setAge(playerage);
    setPosition(playerposition);
    setNation(playernation);
    setClub(playerclub);
    setRating(rating)
    setModal(!modal);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const nextPage = () => {
    setSkip(skip + limit)
}

const previousPage = () => {
    setSkip(skip - limit)
}

useEffect(() => {
  getPlayers(query,dispatch, limit, skip)
}, [skip, limit])


  const players = useSelector((state: IAppState) => state.players);
  const query = useSelector((state: IAppState) => state.query);


  return (
    <div>
    {players.players.sort((player1, player2)  => player2.rating - player1.rating ).map((({...players} : IPlayer) => (
                <div><Button className="button" color="secondary" onClick={() => toggle(players.name, players.age, players.position,
                players.nation, players.club, players.rating)} > {players.name} {players.rating} </Button>
                </div>       
            )))}

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}> {name} </ModalHeader>
        <ModalBody>
          Age: {age}
          <br />
          Position: {position}
          <br />
          Club: {club}
          <br />
          Nation: {nation}
        </ModalBody>
      </Modal>
      <div className="buttons">
          <br/>
          <Button className="prevnext" color="primary" onClick={previousPage}>Previous page</Button>{'  '}
          <Button className="prevnext" color="primary" onClick={nextPage}>Next page</Button>
          <br/>
          <br/>
      </div>
    </div>
  );
};

export default Scroller;
