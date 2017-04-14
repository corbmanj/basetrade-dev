import React from 'react'
import NavLink from './NavLink'
import {Button} from 'react-bootstrap'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex><Button bsStyle='primary'>Home</Button></NavLink></li>
          <li><NavLink to="/about"><Button bsStyle='info'>About</Button></NavLink></li>
          <li><NavLink to="/repos"><Button bsStyle='warning'>Repos</Button></NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
