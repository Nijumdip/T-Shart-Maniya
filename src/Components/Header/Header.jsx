import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink.js';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar className="mb-3 p-4" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={} />{" "} */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/shop">Shop</CustomLink>
              <CustomLink to="/orderReview">Order Review</CustomLink>
              <CustomLink to='/grandpa'>Grand Pa</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2>Welcome to my T-Shart Maniya !!!</h2>
    </div>
  );
};

export default Header;
