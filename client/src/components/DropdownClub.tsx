import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../css/searchbar.css";

const DropdownClub = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="filterbar">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="button" caret>
          Club
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Legends</DropdownItem>
          <DropdownItem>Legends</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Premier League</DropdownItem>
          <DropdownItem>Arsenal</DropdownItem>
          <DropdownItem>Chelsea</DropdownItem>
          <DropdownItem>Leicester</DropdownItem>
          <DropdownItem>Liverpool</DropdownItem>
          <DropdownItem>Manchester City</DropdownItem>
          <DropdownItem>Manchester United</DropdownItem>
          <DropdownItem>Tottenham</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Serie A</DropdownItem>
          <DropdownItem>Atalanta</DropdownItem>
          <DropdownItem>Cagliari</DropdownItem>
          <DropdownItem>Inter Milan</DropdownItem>
          <DropdownItem>Juventus</DropdownItem>
          <DropdownItem>Lazio</DropdownItem>
          <DropdownItem>Napoli</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>LaLiga</DropdownItem>
          <DropdownItem>Atleatico Madrid</DropdownItem>
          <DropdownItem>Barcelona</DropdownItem>
          <DropdownItem>Real Madrid</DropdownItem>
          <DropdownItem>Real Socidad</DropdownItem>
          <DropdownItem>Villareal</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Bundesliga</DropdownItem>
          <DropdownItem>Bayern Munchen</DropdownItem>
          <DropdownItem>Borussia Dortmund</DropdownItem>
          <DropdownItem>Borussis Mönchengladbach</DropdownItem>
          <DropdownItem>Redbull Leipzig</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header> Ligue 1 </DropdownItem>
          <DropdownItem>PSG</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownClub;
