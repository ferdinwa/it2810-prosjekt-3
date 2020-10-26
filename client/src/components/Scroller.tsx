import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { useSelector } from "react-redux";
import { IPlayer, IAppState } from "../interfaces";
import "../css/scroller.css";

const Scroller = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [nation, setNation] = useState("");
  const [club, setClub] = useState("");
  const [rating, setRating] = useState(0);

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

  const players = useSelector((state: IAppState) => state.players);

  return (
    <div>
      {players.players
        .sort((player1, player2) => player2.rating - player1.rating)
        .map(({ ...players }: IPlayer) => (
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
              {" "}
              {players.name} {players.rating}{" "}
            </Button>
          </div>
        ))}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}> {name} </ModalHeader>
        <ModalBody>
          Alder: {age}
          <br />
          Posisjon: {position}
          <br />
          Klubb: {club}
          <br />
          Nasjon: {nation}
          <br />
          Rating: {rating}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Scroller;
