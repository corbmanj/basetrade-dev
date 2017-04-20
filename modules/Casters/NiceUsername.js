import React, {Component} from 'react'
import {Col, Image} from 'react-bootstrap'
import nu from '../../static/img/nice_username.jpg'
import {Follow} from 'react-twitter-widgets'

export default class NiceUsername extends Component{
  render() {
    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          <h2 className="text-center">Joey "nice__username" Hay, YouTube Manager</h2>
          <Image bsClass="center img" width="300" height="250" src={nu} responsive />
          <Follow username="nice__username" />
          <p>
            Nice__username is a freelance video editor and aspiring software developer. He grew up playing UMS
            games in StarCraft: Brood War and played StarCraft 2 since its release. Nice__username mostly focuses
            on modding and map making. While he mostly works behind the scenes, nice__username has worked with many
            fan favorite streamers and independently with SC2HL.
          </p>
        </div>
      </div>
    )
  }
}
