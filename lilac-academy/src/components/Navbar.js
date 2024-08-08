import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.svg";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNav = () => setExpanded(false);
  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Brand href="/" className={styles.Brand}>
        <img
          src={logo}
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
        Lilac Alchemy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link onClick={closeNav}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link onClick={closeNav}>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link onClick={closeNav}>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/shop">
            <Nav.Link onClick={closeNav}>Shop</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
