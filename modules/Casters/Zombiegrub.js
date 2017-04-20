import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import zgImg from '../../static/img/zombiegrub.jpg'
import {Follow} from 'react-twitter-widgets'

export default class Zombiegrub extends Component{
  render() {
    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          <h2 className="text-center">Jessica "ZombieGrub" Chernega, Caster</h2>
          <Image bsClass="center img" width="300" height="250" src={zgImg} responsive />
          <Follow username="ZGgaming"/>
          <p>
            ZombieGrub has been playing Starcraft 2 since release, and started her casting career in 2012.
            She began by casting small weekly tournaments, team leagues (such as the URTL), and clan wars.
            Her first big gig as a caster would come from casting the IEM Season VII Singapore: American Qualifiers
            with Zanderfever. Shortly after, she was accepted to community cast MLG, and then DreamHack. In 2013,
            she became a permanent caster on BaseTradeTV.
          </p>
        </div>
      </div>
    )
  }
}
