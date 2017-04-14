import React, {Component} from 'react'
import NavbarComponent from './Navbar'
import NavLink from './NavLink'
import {Button} from 'react-bootstrap'

class App extends Component{
  render() {
    return (
      <div>
        <NavbarComponent/>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex><Button bsStyle='primary'>Home</Button></NavLink></li>
          <li><NavLink to="/about"><Button bsStyle='info'>About</Button></NavLink></li>
          <li><NavLink to="/repos"><Button bsStyle='warning'>Repos</Button></NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App
