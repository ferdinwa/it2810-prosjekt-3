import React from "react";
import Select from "react-select";
import "../css/searchbar.css";
import { useDispatch } from "react-redux";
import { setNation } from "../actions/nationActions";

const NationSelect = () => {
  const dispatch = useDispatch();

  const optionNation = [
    { value: "", label: "All nations" },
    { value: "Argentina", label: "Argentina" },
    { value: "Austria", label: "Austria" },
    { value: "Belgium", label: "Belgium" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Brazil", label: "Brazil" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Egypt", label: "Egypt" },
    { value: "England", label: "England" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Gabon", label: "Gabon" },
    { value: "Germany", label: "Germany" },
    { value: "Hungary", label: "Hungary" },
    { value: "Italy", label: "Italy" },
    { value: "Ivory Coast", label: "Ivory Coasy" },
    { value: "Mexico", label: "Mexico" },
    { value: "Morocco", label: "Morocco" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Norway", label: "Norway" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Romania", label: "Romania" },
    { value: "Scotland", label: "Scotland" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "South Korea", label: "South Korea" },
    { value: "Soviet Union", label: "Soviet Union" },
    { value: "Spain", label: "Spain" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Ukrain", label: "Ukraine" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Wales", label: "Wales" },
  ];

  const handleClick = (nat: string) => {
    dispatch(setNation(nat));
  };

  return (
    <div className="filterbar">
      <Select
        options={optionNation}
        placeholder="Select nation"
        onChange={(value: any) => handleClick(value.value)}
        autoFocus
      >
        {" "}
      </Select>
    </div>
  );
};

export default NationSelect;
