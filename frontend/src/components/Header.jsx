import React from 'react'
import { Navbar,Nav, Container} from "react-bootstrap";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import smLogo from '../assets/smLogo.png';


export const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={smLogo} alt="spinmastersLogo" width="50px" height="50px"/>
                    SpinMasters</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart/>Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}
export default Header