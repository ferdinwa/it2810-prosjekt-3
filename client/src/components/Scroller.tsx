import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { useSelector } from "react-redux";
import { IPlayer, IAppState } from "../interfaces";
import "../css/scroller.css";
import { useDispatch } from "react-redux";
import { getPlayers } from "../actions/playerActions";
import axios from "axios";
import images from "../media/images/images";

const Scroller = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [nation, setNation] = useState("");
  const [club, setClub] = useState("");
  const [rating, setRating] = useState(0);
  const [skip, setSkip] = useState(0);
  const [score, setScore] = useState(0);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  //get global state variables from the Redux store
  const players = useSelector((state: IAppState) => state.players);
  const pos = useSelector((state: IAppState) => state.position);
  const nat = useSelector((state: IAppState) => state.nation);
  const clu = useSelector((state: IAppState) => state.club);
  const ag = useSelector((state: IAppState) => state.age);
  const scor = useSelector((state: IAppState) => state.score);
  const query = useSelector((state: IAppState) => state.query);

  const limit = 10;

  //method to toggle the modal / show information about the chosen player
  const toggle = (
    playername: string,
    playerage: string,
    playerposition: string,
    playernation: string,
    playerclub: string,
    rating: number,
    id: string,
    score: number
  ) => {
    setName(playername);
    setAge(playerage);
    setPosition(playerposition);
    setNation(playernation);
    setClub(playerclub);
    setRating(rating);
    setId(id);
    setScore(score);
    setModal(!modal);
  };

  //show/not show the modal
  const toggleModal = () => {
    setModal(!modal);
  };

  //to get the "next" players from the database on "next page" click
  const nextPage = () => {
    setSkip(skip + limit);
  };

  //to get the "previous" players from the database on "previous page" click
  const previousPage = () => {
    skip === 0 ? setSkip(0) : setSkip(skip - limit);
  };

  //update the score on buttonclick
  const changeScore = (inputScore: number) => {
    let updatedScore = score + inputScore;
    setScore(updatedScore);
    axios.put("/api/players/" + id, { score: updatedScore }).then((res) => {
      console.log("PLAYERS", res);
    });
  };

  //get players every time query, skip or limit changes
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    getPlayers(query, pos, nat, clu, ag, scor, dispatch, limit, skip);
  }, [query, dispatch, skip, limit]);

  const imgSrc = images[name];

  return (
    <div className="picture" data-testid="scroller">
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
                players.rating,
                players.id,
                players.score
              )
            }
          >
            {players.name} {players.rating}
          </Button>
        </div>
      ))}

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}> {name} </ModalHeader>
        <ModalBody className="modalcontainer">
          <div>
            {" "}
            Age: {age}
            <br />
            Position: {position}
            <br />
            Club: {club}
            <br />
            Nation: {nation}
            <br />
            Rating: {rating}
            <br />
            Score: {score}
          </div>
          <img src={imgSrc} className="playerimg" />
          {console.log(imgSrc)}
        </ModalBody>
        <Button color="success" onClick={() => changeScore(1)}>
          Upvote
        </Button>
        <Button color="danger" onClick={() => changeScore(-1)}>
          Downvote
        </Button>
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
