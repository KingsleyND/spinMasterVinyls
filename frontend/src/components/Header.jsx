import React from 'react'
import { Navbar,Nav, Container} from "react-bootstrap";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import smLogo from '../assets/smLogo.png';
import {LinkContainer} from 'react-router-bootstrap';


export const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={smLogo} alt="spinmastersLogo" width="50px" height="50px"/>
                    .
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                        <Nav.Link><FaShoppingCart/>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}
export default Header