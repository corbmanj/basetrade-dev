import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Casters from './modules/Casters'
import Zombiegrub from './modules/Casters/Zombiegrub'
import Rifkin from './modules/Casters/Rifkin'
import NiceUsername from './modules/Casters/NiceUsername'
import House from './modules/House'
import Sponsor from './modules/Sponsor'
import Calendar from './modules/Calendar'

import Home from './modules/Home'

document.addEventListener('DOMContentLoaded', function () {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/house" component={House} />
        <Route path="/casters" component={Casters}/>
        <Route path="/casters/zombiegrub" component={Zombiegrub}/>
        <Route path="/casters/rifkin" component={Rifkin}/>
        <Route path="/casters/niceusername" component={NiceUsername}/>
        <Route path="/sponsor" component={Sponsor}/>
        <Route path="/calendar" component={Calendar}/>
      </Route>
    </Router>
  ), document.getElementById('app'))
})

