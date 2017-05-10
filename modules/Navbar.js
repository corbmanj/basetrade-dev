import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
require('es6-promise').polyfill()
require('isomorphic-fetch')

class NavbarComponent extends Component{
  constructor(props) {
    super(props)
    this.state = {}
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
    const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'
    const that = this
    fetch(`${baseUrl}/twitch/stream/basetradetv`)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(function(response) {
        that.setState({isLive: !!response})
      })
  }

  render () {
    const className = this.state.isLive ? 'live-ind live' : 'live-ind'
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
            <LinkContainer to="/about" onlyActiveOnIndex><NavItem eventKey={2} href="#">About Us</NavItem></LinkContainer>
            {/*<NavDropdown eventKey={3} title="Casters" id="basic-nav-dropdown" inverse>*/}
              {/*<LinkContainer to="/casters/zombiegrub"><NavItem eventKey={2} href="#">ZombieGrub</NavItem></LinkContainer>*/}
              {/*<LinkContainer to="/casters/rifkin"><NavItem eventKey={2} href="#">Rifkin</NavItem></LinkContainer>*/}
              {/*<LinkContainer to="/casters/niceusername"><NavItem eventKey={2} href="#">Nice_Username</NavItem></LinkContainer>*/}
              {/*<MenuItem divider />*/}
              {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
            {/*</NavDropdown>*/}
            <LinkContainer to="/house" onlyActiveOnIndex><NavItem eventKey={2} href="#">Team House</NavItem></LinkContainer>
            {/*<LinkContainer to="/tlft" onlyActiveOnIndex><NavItem eventKey={2} href="#">Team LFT</NavItem></LinkContainer>*/}
            <LinkContainer to="/sponsor" onlyActiveOnIndex><NavItem eventKey={2} href="#">Sponsors</NavItem></LinkContainer>
            <LinkContainer to="/support" onlyActiveOnIndex><NavItem eventKey={2} href="#">Support</NavItem></LinkContainer>
            <LinkContainer to="/mod" onlyActiveOnIndex><NavItem eventKey={2} href="#">Mods</NavItem></LinkContainer>
            <LinkContainer to="/rules" onlyActiveOnIndex><NavItem eventKey={2} href="#">Rules</NavItem></LinkContainer>
            <LinkContainer to="/stream" onlyActiveOnIndex><NavItem eventKey={2} href="#">Stream&nbsp;&nbsp;<div className={className} /></NavItem></LinkContainer>
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