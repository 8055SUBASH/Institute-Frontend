import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <div className='header-alignment' >
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto">
          <Link to="/">
            <img alt="Logo" src={require("../img/Logo.png")} width={300} height={50} className="d-inline-block align-top logo-alignment" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#EE633A", marginRight: '3%' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{paddingLeft: "170px"}} >
            <NavLink to="/details" style={{ textDecoration: "none" }}>Course Details</NavLink>
            <NavLink to="/application" style={{ textDecoration: "none" }}> Contact Form </NavLink>
            <NavLink to="/reviewform" style={{ textDecoration: "none" }}>Review Form</NavLink>
            <NavLink className="logout-button" to="/*" style={{ textDecoration: "none" }}>Log out </NavLink>
          </Nav>

        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default AppNavbar;
<NavLink className="logout-button" to="/*" style={{ textDecoration: "none" }}>Log out</NavLink>