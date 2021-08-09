import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as= {NavLink} exact={true} activeClassName="active" to="/">
            <img src="../aasets/icons/icono.png" style={{ maxWidth: 160 }} className='mx-2' alt={'WMySneakers'} name={'WMySneakers'}></img>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as= {NavLink} exact={true} activeClassName="active" to="/category/hombre">Hombres</Nav.Link>
            <Nav.Link as= {NavLink} exact={true} activeClassName="active" to="/category/mujer">Mujeres</Nav.Link>
            <NavDropdown title="Marcas" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={NavLink} exact={true} activeClassName="active" to="/category/marca">Nike</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} exact={true} activeClassName="active" to="/marca/adidas">Adidas</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} exact={true} activeClassName="active" to="/marca/jordan">Jordan</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} exact={true} activeClassName="active" to="/marca/puma">Puma</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} exact={true} activeClassName="active" to="/marca/vans">Vans</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} exact={true} activeClassName="active" to="/category/converse">Converse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/cart">
              <CartWidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
