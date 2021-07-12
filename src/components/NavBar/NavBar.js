import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand as= {Link} exact={true} activeClassName="active" to="/">where are my sneakers?</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as= {Link} exact={true} activeClassName="active" to="/category/hombre">Hombres</Nav.Link>
            <Nav.Link as= {Link} exact={true} activeClassName="active" to="/category/mujer">Mujeres</Nav.Link>
            <NavDropdown title="Marcas" id="collasible-nav-dropdown">
              <NavDropdown.Item>Nike</NavDropdown.Item>
              <NavDropdown.Item>Adidas</NavDropdown.Item>
              <NavDropdown.Item>Jordan</NavDropdown.Item>
              <NavDropdown.Item>Puma</NavDropdown.Item>
              <NavDropdown.Item>Vans</NavDropdown.Item>
              <NavDropdown.Item>JohnFoos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
