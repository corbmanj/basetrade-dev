import React from 'react'
import {Col, Image, Jumbotron} from 'react-bootstrap'
import {Timeline, Follow} from 'react-twitter-widgets'
import dh from '../public/img/dreamhack-photo-300x128.png'
import cal from '../public/img/calendar.png'

export default function Home () {
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

    </div>
  )
}
