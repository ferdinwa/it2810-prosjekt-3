import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';

    export default function AppNavbar() {
        const [isOpen, setIsOpen] = useState(false)

        const toggle = () => {
           setIsOpen(!isOpen)
        }


        //expand="sm" is set to kick in for small screens
        //Adds mb-5, will move everything under the navbar
        return (
            <div>
            
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">FutWeb</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.youtube.com/watch?v=ZJHUn8cV13w">
                                    Maren blir overrasket
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            
            </div>
        )
    }
    
        

  