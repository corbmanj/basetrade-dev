import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

import zgImg from '../public/img/zombiegrub.jpg'
import rifImg from '../public/img/rifkin.jpg'
import nuImg from '../public/img/nice_username.jpg'
import btImg from '../public/img/BTTV_Logo.png'

export default class About extends Component{
  render() {
    return (
      <div>
        <div className="table">
          <div className="col left"><Image width="150" height="250" src={btImg} responsive/></div>
          <div className="col right">
            <h2 className="text-center">BaseTrade TV</h2>
            <p>
              BaseTradeTV was founded by Graham Rifkin Rogers in 2012 as a channel dedicated to StarCraft 2 professional scene. BaseTradeTVs key characteristic is the community involvement behind their content. Subscriptions are filtered back into the channel by forming new tournaments and show matches for viewers to enjoy.
            </p>
            <p>
						  Following BaseTradeTVs creation in 2012, Rifkin and various community casters began casting weekly cups like ZOTAC and Go4SC2 on the channel. Zombiegrub was later added as a core caster and BaseTradeTV partner after consistently casting with Rifkin on the channel. In 2013, the duo began casting their own organized show matches and tournaments with the prize pool funded by community members and viewers.
						</p>
						<p>
						  In August 2015, BaseTradeTV hosted their own offline tournament in Toronto, Canada called Hell, Its Aboot Time. The $17,000 tournament was primarily funded through Kickstarter and channel donations.
						</p>
						<p>
						  In 2016, BaseTradeTV expanded their staff by adding nice__username as Youtube Manager.
						</p>
						<p>
						  In 2017, BaseTradeTV made Team Looking For Team to help support teamless players advertise their availability. As of now, Byul is the only member.
						</p>
          </div>
        </div>

        <div className="table">
          <div className="col left"><Image width="150" height="250" src={rifImg} responsive circle/></div>
          <div className="col right">
            <h2 className="text-center">Graham "Rifkin" Rogers, Founder</h2>
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

        <div className="table">
          <div className="col left"><Image width="150" height="250" src={zgImg} responsive circle/></div>
          <div className="col right">
            <h2 className="text-center">Jessica "ZombieGrub" Chernega, Caster</h2>
            <p>
              ZombieGrub has been playing StarCraft 2 since release, and started her casting career in 2012.
              She began by casting small weekly tournaments, team leagues (such as the URTL), and clan wars.
              Her first big gig as a caster would come from casting the IEM Season VII Singapore: American Qualifiers
              with Zanderfever. Shortly after, she was accepted to community cast MLG, and then DreamHack. In 2013,
              she became a permanent caster on BaseTradeTV.
            </p>
          </div>
        </div>

        <div className="table">
          <div className="col left"><Image width="150" height="250" src={nuImg} responsive circle/></div>
          <div className="col right">
            <h2 className="text-center">Joey "nice__username" Hay, YouTube Manager</h2>
            <p>
              Nice__username is a freelance video editor and aspiring software developer. He grew up playing UMS
              games in StarCraft: Brood War and played StarCraft 2 since its release. Nice__username mostly focuses
              on modding and map making. While he mostly works behind the scenes, nice__username has worked with many
              fan favorite streamers and independently with SC2HL.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
