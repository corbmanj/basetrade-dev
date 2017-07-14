import React, {Component} from 'react'
import {Col, Image, Jumbotron, Button, Well} from 'react-bootstrap'
import {Timeline, Follow} from 'react-twitter-widgets'
import dh from '../public/img/dreamhack-photo-300x128.png'
import cal from '../public/img/calendar.png'

class Home extends Component{
  render() {
    return (
      <div id="home">
        <Jumbotron bsClass="jumbo jumbotron">
          <h1 className="center">BaseTradeTV At Dreamhack Atlanta</h1>
          <Image height="200" bsClass="left img" src={dh} responsive />
          <p>
            BaseTradeTV is hosting a BYOC tournament at DH Atlanta July 21st - 23rd. Check out the details at matcherino
            along with links to buy discounted DH tickets:
          </p>
          <p>
            <a href="https://matcherino.com/b/tournaments/6916/description" target="_blank">https://matcherino.com/b/tournaments/6916/description</a>
          </p>

        </Jumbotron>

        <Col id="news" sm={6} md={4}>
          <h2 className="text-center">News</h2>
          <Image height="200" bsClass="center img" src={dh} responsive />
          <h3>Did we mention?</h3>
          <p>
            We would love to see you at DH Atlanta. And what better way to spend the weekend than to participate in our
          </p>
          <p>
            <a href="https://matcherino.com/b/tournaments/6916/description" target="_blank">BYOC tournament</a>
          </p>

        </Col>
        <Col sm={6} md={4}>
          <h2 className="text-center">Schedule</h2>
          <a href="/calendar"><Image bsClass="center img" src={cal} responsive /></a>
          <p>Check out the upcoming streams on our <a href="/calendar">Calendar page</a></p>
        </Col>
        <Col sm={6} md={4}>
          <Follow username="BaseTradeTV" />
          <Timeline
            dataSource={{sourceType: 'profile', screenName: 'BaseTradeTV'}}
            options={{height: '500'}}
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
