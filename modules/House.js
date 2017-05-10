import React, {Component} from 'react'
import moment from 'moment'
import {Image} from 'react-bootstrap'
import cloudy from '../public/img/teamHouse/cloudy.jpg'
import iaguz from '../public/img/teamHouse/iaguz.jpg'
import major from '../public/img/teamHouse/major.jpg'
import noregret from '../public/img/teamHouse/noregret.jpg'
import scarlett from '../public/img/teamHouse/scarlett.jpg'
import sortof from '../public/img/teamHouse/sortof.png'
import time from '../public/img/teamHouse/time.jpg'

class House extends Component{
  constructor(props) {
    super(props)
    this.state = {
      players: [
        {
          id: 1,
          name: 'Jake "NoRegreT" Umpleby',
          shortName: 'House Mom',
          image: noregret,
          birthdate: '1996-03-25',
          awards: [],
          race: 'Zerg',
          team: null,
          nationality: 'Canada',
          highlights: {}
        },
        {
          id: 2,
          name: 'Juan Carlos "MajOr" Tena Lopez',
          shortName: 'MajOr',
          image: major,
          birthdate: '1993-05-20',
          awards: [],
          race: 'Terran',
          team: null,
          nationality: 'Mexico',
          highlights: {}
        },
        {
          id: 3,
          name: 'Sasha "Scarlett" Hostyn',
          shortName: 'Scarlett',
          image: scarlett,
          birthdate: '1993-12-14',
          awards: [],
          race: 'Zerg (Sometimes Protoss?)',
          team: null,
          nationality: 'Canada',
          highlights: {}
        },
        {
          id: 4,
          name: 'Rickard "SortOf" Bergman',
          shortName: 'SortOf',
          image: sortof,
          birthdate: '1993-07-24',
          awards: [],
          race: 'Zerg',
          team: null,
          nationality: 'Sweden',
          highlights: {}
        },
        {
          id: 5,
          name: 'Li "TIME" Peinan',
          shortName: 'TIME',
          image: time,
          birthdate: '2000-06-28',
          awards: [],
          race: 'Terran',
          team: 'X-Team',
          nationality: 'China',
          highlights: {}
        },
        {
          id: 6,
          name: 'Gao "Cloudy" Yuan',
          shortName: 'Cloudy',
          image: cloudy,
          birthdate: '1994-04-20',
          awards: [],
          race: 'Protoss',
          team: 'X-Team',
          nationality: 'China',
          highlights: {}
        },
        {
          id: 7,
          name: 'Ethan "Iaguz" Zugai',
          shortName: 'Iaguz',
          image: iaguz,
          birthdate: '1990-11-09',
          awards: [],
          race: 'Terran',
          team: 'X-Team',
          nationality: 'Australia',
          highlights: {}
        }
      ]}

  }
  render () {
    const calcAge = (player) => {
      let bd = moment(player.birthdate)
      let today = moment()
      return today.diff(bd, 'years')
    }
    const playerCards = this.state.players.map(player => {
      player.age = calcAge(player)
      return (
        <div key={player.id} className="flex-item" onClick={() => this.props.openModal(player)}>
          <Image width="250" bsClass="center img" src={player.image} />
          <div className="player">
            <h4>{player.name}</h4>
            <p>{player.race}</p>
          </div>
        </div>
      )
    })
    return (
      <div id="house">
        <div className="flex-container">
          {playerCards}
        </div>
      </div>
    )
  }
}

export default House
