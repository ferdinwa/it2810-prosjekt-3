import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import "../css/navbar.css";
import { Audio } from "./Audio";

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //expand="sm" is set to kick in for small screens
  //Adds mb-5, will move everything under the navbar
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="navbar">
        <Container>
          <NavbarBrand href="/" className="navbartext">
            FH
          </NavbarBrand>
          {/* <Audio /> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.youtube.com/watch?v=ZJHUn8cV13w">
                  <img
                    className="img"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/FIFA_21_logo.svg/1200px-FIFA_21_logo.svg.png"
                    }
                    alt=""
                  />{" "}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
