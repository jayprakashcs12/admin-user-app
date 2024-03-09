import React, { useState } from "react";
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MegaNavBar = (props) => {

    let logoImg = props.logoImg;

    let [dropShow, setDropShow] = useState(false);

    return (
        <React.Fragment>
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary pro-navbar" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Image src={logoImg} className="logo-img" alt="software-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Home</NavLink>
                            <NavLink to="/about-us" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">About Us</NavLink>
                            <NavDropdown title="Our Services" id="basic-nav-dropdown" show={dropShow} onMouseEnter={() => setDropShow(true)} onMouseLeave={() => setDropShow(false)}>
                                <NavDropdown.Item>
                                    <NavLink to="/android-development" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Android Development</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/mern-development" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">MERN Development</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/sql-development" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">SQL Development</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to="/career" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Career</NavLink>
                            <NavLink to="/contact-us" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default MegaNavBar;