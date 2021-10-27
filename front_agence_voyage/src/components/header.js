import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark"  variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">TravelBea</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/Hotels"><i className='fas fa-hotel'></i> Hotels</Nav.Link>
                        <Nav.Link href="/Vols"><i className='fas fa-plane'></i> Vols</Nav.Link>
                        <Nav.Link href="/Bateau"><i className='fas fa-ship'></i> Bateaux</Nav.Link>
                        <Nav.Link href="/Voitures"><i className='fas fa-car'></i> Voitures</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
};

export default Header;