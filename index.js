import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import House from './modules/House'
import Sponsor from './modules/Sponsor'
import Stream from './modules/Stream'
import Support from './modules/Support'
import Mod from './modules/Mod'
import Rules from './modules/Rules'
import Calendar from './modules/Calendar'
import TLFT from './modules/TLFT'

import Home from './modules/Home'

document.addEventListener('DOMContentLoaded', function () {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/house" component={House} />
        <Route path="/tlft" component={TLFT} />
        <Route path="/sponsor" component={Sponsor}/>
        <Route path="/support" component={Support}/>
        <Route path="/stream" component={Stream}/>
        <Route path="/stream/:code" component={Stream}/>
        <Route path="/mod" component={Mod}/>
        <Route path="/rules" component={Rules}/>
        <Route path="/calendar" component={Calendar}/>
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  ), document.getElementById('app'))
})

