import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { useSelector } from "react-redux";
import { IPlayer, IAppState } from "../interfaces";
import "../css/scroller.css";
import { useDispatch } from "react-redux";
import { getPlayers } from "../actions/playerActions";

const Scroller = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [nation, setNation] = useState("");
  const [club, setClub] = useState("");
  const [rating, setRating] = useState(0);
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch();

  const players = useSelector((state: IAppState) => state.players);
  const pos = useSelector((state: IAppState) => state.position);
  const nat = useSelector((state: IAppState) => state.nation);
  const clu = useSelector((state: IAppState) => state.club);
  const ag = useSelector((state: IAppState) => state.age);
  const query = useSelector((state: IAppState) => state.query);

  const limit = 10;

  const toggle = (
    playername: string,
    playerage: string,
    playerposition: string,
    playernation: string,
    playerclub: string,
    rating: number
  ) => {
    setName(playername);
    setAge(playerage);
    setPosition(playerposition);
    setNation(playernation);
    setClub(playerclub);
    setRating(rating);
    setModal(!modal);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const nextPage = () => {
    setSkip(skip + limit);
  };

  const previousPage = () => {
    skip === 0 ? setSkip(0) : setSkip(skip - limit);
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    getPlayers(query, pos, nat, clu, ag, dispatch, limit, skip);
  }, [query, dispatch, skip, limit]);

  return (
    <div>
      {players.players.map(({ ...players }: IPlayer) => (
        <div>
          <Button
            className="playerbutton"
            color="secondary"
            onClick={() =>
              toggle(
                players.name,
                players.age,
                players.position,
                players.nation,
                players.club,
                players.rating
              )
            }
          >
            {players.name} {players.rating}
          </Button>
        </div>
      ))}

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}> {name} </ModalHeader>
        <ModalBody>
          Age: {age}
          <br />
          Position: {position}
          <br />
          Club: {club}
          <br />
          Nasjon: {nation}
          <br />
          Rating: {rating}
        </ModalBody>
      </Modal>
      {!isFirstRun.current && (
        <div className="buttons">
          <br />
          <Button
            id={skip === 0 ? "disable" : ""}
            className="prevnext"
            color="primary"
            disabled={skip === 0 ? true : false}
            onClick={previousPage}
          >
            Previous page
          </Button>
          {"  "}
          <Button
            id={players.players.length < 5 ? "disable" : ""}
            className="prevnext"
            color="primary"
            onClick={nextPage}
            disabled={players.players.length < 5 ? true : false}
          >
            Next page
          </Button>
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Scroller;
