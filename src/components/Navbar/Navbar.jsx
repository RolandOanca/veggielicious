import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav} from 'react-bootstrap';

import OffCanvas from '../OffCanvas/OffCanvas';
import classes from './Navbar.module.css';


const NavbarCustom = (props) => {
    
    return (
        <div>
            <Navbar bg="dark" fixed="top"  variant="dark" className={classes.nav}>
                <Container>
                    <Navbar.Brand href="#home" >Navbar</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className={classes.nav_links}>Home</Nav.Link>
                        <Nav.Link href="#home" className={classes.nav_links}>Home</Nav.Link>           
                    </Nav>
                    
                    <OffCanvas onClick={props.onShowCart}/>
                </Container>
            </Navbar>

           
        </div>
    )
}

export default NavbarCustom;

