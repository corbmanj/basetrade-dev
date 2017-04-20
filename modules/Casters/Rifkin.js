import React, {Component} from 'react'
import {Col, Image} from 'react-bootstrap'
import rifkinImg from '../../static/img/rifkin.jpg'
import {Follow} from 'react-twitter-widgets'

export default class Rifkin extends Component{
  render() {
    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          <h2 className="text-center">Graham "Rifkin" Rogers, Founder</h2>
          <Image bsClass="center img" width="300" height="250" src={rifkinImg} responsive />
          <Follow username="Rif_kingz" />
          <p>
          Rifkin has loved StarCraft since he got it as a christmas present. He played many big game hunter maps with no
            rush rules dreaming of the day he would be grand master. Life didn't have this in his cards though. He grew
            up and grew frustrated with working a simple warehousing job. With the launch of StarCraft 2, he decided to
            found BaseTrade TV, quit his job, and make his passion a reality. He grabbed every casting gig he could,
            even if they didn't pay well, or even at all. He put anything he could back into the community to fund
            events like show matches, SC2 Survivor, and even a live event (Hell Its Aboot Time (HIAT)).
          </p>
          <p>His passion, determination and mostly goofy attitude continues to drive BaseTrade TV into StarCraft lore.</p>
        </div>
      </div>
    )
  }
}
