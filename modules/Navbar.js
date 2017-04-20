import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import NavLink from './NavLink'
import { LinkContainer } from 'react-router-bootstrap';

class NavbarComponent extends Component{
  render () {
    return (
      <Navbar inverse collapseOnSelect className="noBottomMargin fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <div>BaseTrade TV</div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/" onlyActiveOnIndex><NavItem eventKey={1} href="#">Home</NavItem></LinkContainer>
            {/*<LinkContainer to="/casters" onlyActiveOnIndex><NavItem eventKey={2} href="#">Casters</NavItem></LinkContainer>*/}
            <NavDropdown eventKey={3} title="Casters" id="basic-nav-dropdown" inverse>
              <LinkContainer to="/casters/zombiegrub"><NavItem eventKey={2} href="#">ZombieGrub</NavItem></LinkContainer>
              <LinkContainer to="/casters/rifkin"><NavItem eventKey={2} href="#">Rifkin</NavItem></LinkContainer>
              <LinkContainer to="/casters/niceusername"><NavItem eventKey={2} href="#">Nice_Username</NavItem></LinkContainer>
              {/*<MenuItem divider />*/}
              {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
            </NavDropdown>
            <LinkContainer to="/house" onlyActiveOnIndex><NavItem eventKey={2} href="#">Team House</NavItem></LinkContainer>
            <LinkContainer to="/sponsor" onlyActiveOnIndex><NavItem eventKey={2} href="#">Sponsors</NavItem></LinkContainer>
            <LinkContainer to="/calendar" onlyActiveOnIndex><NavItem eventKey={2} href="#">Calendar</NavItem></LinkContainer>
          </Nav>
          {/*<Nav pullRight>*/}
            {/*<NavItem eventKey={1} href="#">Link Right</NavItem>*/}
            {/*<NavItem eventKey={2} href="#">Link Right</NavItem>*/}
          {/*</Nav>*/}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent