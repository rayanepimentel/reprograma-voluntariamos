import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './Navbar.css'

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
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Sobre">SOBRE</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  EVENTOS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    DIVULGUE
                  </DropdownItem>
                  <DropdownItem>
                    ASSINE
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    ATIVOS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Cabecalho