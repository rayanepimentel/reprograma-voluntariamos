import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import './Navbar.css'

  import { Link } from "react-router-dom"

 class Cabecalho extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  light expand="md" className='navbar'>
          <NavbarBrand>LOGO - VOLUNTARIAMOS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink>HOME</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Sobre">
                  <NavLink>SOBRE</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Eventos">
                  <NavLink>EVENTOS</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/Contato">
                  <NavLink>CONTATO</NavLink>
                </Link>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Cabecalho