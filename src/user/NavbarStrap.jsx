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
                  to="accueil"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}>
                  Accueil
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="presentation"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                    Notre Histoire
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="card"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                    Nos Spectacles
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="formulaire"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                    Réservation
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                    Contact
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
