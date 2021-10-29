import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import glowUP from './glowUp.png'

const Header = () => {
    return (
        <header>
            <Navbar variant="light" expand="md" collapseOnSelect style={{height:'70px' ,backgroundColor:'#F3ECEB'}}>
            <Container>
                <Navbar.Brand href="/"><img src={glowUP} alt="Logo"  style={{width:'160px'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/employees"><i className='fas fa-user'></i> Employes</Nav.Link>
                        <Nav.Link href="/produits"><i className='fas fa-heart'></i> Produits</Nav.Link>


                        

                        {/* <Nav.Link href="/Hotels"><i className='fas fa-hotel'></i> Hotels</Nav.Link>
                        <Nav.Link href="/Vols"><i className='fas fa-plane'></i> Vols</Nav.Link>
                        <Nav.Link href="/Bateau"><i className='fas fa-ship'></i> Bateaux</Nav.Link>
                        <Nav.Link href="/Voitures"><i className='fas fa-car'></i> Voitures</Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
};

export default Header;