import React from "react";
import "../css/searchbar.css";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setClub } from "../actions/clubActions";

const ClubSelect = () => {
  const dispatch = useDispatch();

  //list of all the clubs in database
  const optionClub = [
    { value: "", label: "All clubs" },
    { value: "Arsenal", label: "Arsenal" },
    { value: "Atalanta", label: "Atalanta" },
    { value: "Atletico Madrid", label: "Atletico Madrid" },
    { value: "Barcelona", label: "Barcelona" },
    { value: "Bayern Munich", label: "Bayern Munich" },
    { value: "Borussia Dortmund", label: "Borussia Dortmund" },
    { value: "Borussia Mönchengladbach", label: "Borussia Mönchengladbach" },
    { value: "Cagliari", label: "Cagliari" },
    { value: "Chelsea", label: "Chelsea" },
    { value: "Inter Milan", label: "Inter Milan" },
    { value: "Juventus", label: "Juventus" },
    { value: "Lazio", label: "Lazio" },
    { value: "Legends", label: "Legends" },
    { value: "Leicester", label: "Leicester" },
    { value: "Liverpool", label: "Liverpool" },
    { value: "Manchester City", label: "Manchester City" },
    { value: "Manchester United", label: "Manchester United" },
    { value: "Napoli", label: "Napoli" },
    { value: "PSG", label: "PSG" },
    { value: "Real Madrid", label: "Real Madrid" },
    { value: "Real Socidad", label: "Real Socidad" },
    { value: "Red Bull Leipzig", label: "Red Bull Leipzig" },
    { value: "Tottenham", label: "Tottenham" },
    { value: "Villareal", label: "Villareal" },
  ];

  const handleClick = (pos: string) => {
    dispatch(setClub(pos));
  };

  //React-select component to select different clubs and set global state to given club
  return (
    <div className="filterbar">
      <Select
        options={optionClub}
        placeholder="Select club"
        onChange={(value: any) => handleClick(value.value)}
        autoFocus
      >
        {" "}
      </Select>
    </div>
  );
};

export default ClubSelect;
