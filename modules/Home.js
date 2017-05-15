import React, {Component} from 'react'
import {Col, Image, Jumbotron, Button, Well} from 'react-bootstrap'
import {Timeline, Follow} from 'react-twitter-widgets'
import shirt from '../public/img/shirt.jpg'

class Home extends Component{
  render() {
    return (
      <div id="home">
        <Jumbotron bsClass="jumbo jumbotron">
          <h1 className="center">The new shirt is live!</h1>
          <Image height="200" bsClass="left img" src={shirt} responsive />
          <p>
            We love your faces and made this shirt design with all of you in mind. It looks great, but most of the
            emotes, memes, and inside jokes are for our dedicated watchers &lt;3. We hope you appreciate it and consider
            purchasing one!
          </p>
          <p>The campaign runs for 3 weeks total <a href="//teespring.com/twitch/bt-chat-memes" target="_blank">here</a>.</p>
          <p>
            If we sell at least 50 shirts in 3 weeks, we'll be able to run a second campaign :-) Thanks for your
            continued support, and we hope you'll check out the shirt at least!
          </p>

        </Jumbotron>

        <Col id="news" sm={6} md={4}>
          <h2 className="text-center">News</h2>
          <Image height="200" bsClass="center img" src={shirt} responsive />
          <h3>Did we mention?</h3>
          <p>
            Seriously though, you should really buy one!
          </p>
          <div>
            <Button bsStyle="primary"><a href="//teespring.com/twitch/bt-chat-memes" target="_blank">Click Here!</a></Button>
          </div>

        </Col>
        <Col sm={6} md={4}>
          <h2 className="text-center">Schedule</h2>
          <Image bsClass="center img" src="//placecage.com/201/201" responsive circle />
          <p></p>
          <ul>
            <li><b>Tuesday</b><span> - Olimoleauge 7am EST</span></li>
            <li><b>Wednesday</b><span> - BTSL 6am EST</span></li>
            <li><b>Thursday</b><span> - VSL 6am EST</span></li>
            <li><b>Friday</b><span> - VSL 6am EST</span></li>
          </ul>
        </Col>
        <Col sm={6} md={4}>
          <Follow username="BaseTradeTV" />
          <Timeline
            dataSource={{sourceType: 'profile', screenName: 'BaseTradeTV'}}
            options={{height: '1000'}}
          />
        </Col>

        {/*<Col sm={6} md={4}>*/}
          {/*<h2 className="text-center">Sponsors</h2>*/}
          {/*<Image bsClass="center img" src="http://placecage.com/203/203" responsive circle />*/}
          {/*<p>But what further depreciates the whale as a civilized dish, is his exceeding richness. He is the great*/}
            {/*prize ox of the sea, too fat to be delicately good. Look at his hump, which would be as fine eating as*/}
            {/*the buffalo’s (which is esteemed a rare dish), were it not such a solid pyramid of fat. </p>*/}
          {/*<p>But the spermaceti itself, how bland and creamy that is; like the transparent, half-jellied, white*/}
            {/*meat of a cocoanut in the third month of its growth, yet far too rich to supply a substitute for butter.*/}
            {/*Nevertheless, many whalemen have a method of absorbing it into some other substance, and then partaking of it.</p>*/}
          {/*<p>In the long try watches of the night it is a common thing for the seamen to dip their ship-biscuit into the*/}
            {/*huge oil-pots and let them fry there awhile. Many a good supper have I thus made.*/}
          {/*</p>*/}
        {/*</Col>*/}

      </div>
    )
  }
}

export default Home
