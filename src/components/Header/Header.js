import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
export default class Header extends Component{

    render(){
        return(
            <div>   
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand to="/">Moe-Sartawi App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/about" style={{color: '#FFF'}}>About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contact" style={{color: '#FFF'}}>Contact</Link>
                    </Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link>
                        <Link to="/register" style={{color: '#FFF'}}>Register</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/login" style={{color: '#FFF'}}>Log in</Link>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}