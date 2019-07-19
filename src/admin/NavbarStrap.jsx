import React, { Component } from 'react';
import { Link } from 'react-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './NavbarStrap.scss';

class NavbarStrap extends Component {
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
      <div className="NavbarStrap">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">WildCircus</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="nouveau"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                    Nouveau
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="modifier"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                    Modifier
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="reservation"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                    Réservation
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarStrap;
