import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

class House extends Component{
  constructor(props) {
    super(props)
    this.state = {
      players: [
        {
          id: 1,
          name: 'Jake "NoRegreT" Umpleby',
          shortName: 'House Mom',
          image: "http://placecage.com/250/251",
          age: 26,
          awards: [],
          race: 'Zerg',
          team: null,
          nationality: 'Canada'
        },
        {
          id: 2,
          name: 'Juan Carlos "MajOr" Tena Lopez',
          shortName: 'MajOr',
          image: "http://placecage.com/250/253",
          age: 26,
          awards: [],
          race: 'Terran',
          team: null,
          nationality: 'Mexico'
        },
        {
          id: 3,
          name: 'Sasha "Scarlett" Hostyn',
          shortName: 'Scarlett',
          image: "http://placecage.com/250/252",
          age: 'Unknown',
          awards: [],
          race: 'Zerg (Sometimes Protoss?)',
          team: null,
          nationality: 'Canada'
        },
        {
          id: 4,
          name: 'Rickard "SortOf" Bergman',
          shortName: 'SortOf',
          image: "http://placecage.com/251/250",
          age: 'Unknown',
          awards: [],
          race: 'Zerg',
          team: null,
          nationality: 'Sweden'
        },
        {
          id: 5,
          name: 'Li "TIME" Peinan',
          shortName: 'TIME',
          image: "http://placecage.com/251/251",
          age: 'Unknown',
          awards: [],
          race: 'Terran',
          team: 'X-Team',
          nationality: 'China'
        },
        {
          id: 6,
          name: 'Gao "Cloudy" Yuan',
          shortName: 'Cloudy',
          image: "http://placecage.com/251/252",
          age: 'Unknown',
          awards: [],
          race: 'Protoss',
          team: 'X-Team',
          nationality: 'China'
        },
        {
          id: 7,
          name: 'Ethan "Iaguz" Zugai',
          shortName: 'Iaguz',
          image: "http://placecage.com/251/253",
          age: 'Unknown',
          awards: [],
          race: 'Terran',
          team: 'X-Team',
          nationality: 'Australia'
        }
      ]}

  }
  render () {
    const playerCards = this.state.players.map(player => {
      return (
        <div key={player.id} className="flex-item" onClick={() => this.props.openModal(player)}>
          <Image bsClass="center img" src={player.image} />
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
