import React, {Component} from 'react'
import {Col, Image} from 'react-bootstrap'

export default class Casters extends Component{
  render() {
    return (
      <div>
        <Col sm={12} md={6}>
          <h2 className="text-center">Graham "Rifkin" Rogers</h2>
          <Image bsClass="center img" src="http://placecage.com/202/152" responsive />
          <p>Timothy shivered, and not only because of the chilly March winds.
            In the pre-dawn light, he could just make out the dark form of the vampire entering the alley.
            It had pursued him all night, and now Timothy was cornered, with no way out—</p>
          <p>And then the sun peeked over the horizon and the vampire shattered into a million shards of
            shadow and blew away on the wind.</p>
          <p>Timothy wiped the sweat from his brow. Too close, and this was happening too often lately.
            But at least he had survived. Yes, it was yet another case of daylight saving Tim.</p>
        </Col>
        <Col sm={12} md={6}>
          <h2 className="text-center">Jessica "ZombieGrub" Chernovy</h2>
          <Image bsClass="center img" src="http://placecage.com/201/152" responsive />
          <a href="https://twitter.com/ZGgaming" className="twitter-follow-button" data-size="large" data-show-count="false">Follow @ZGgaming</a>
          <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
            Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. </p>
          <p>Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
            cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
          </p>
          <p>The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi
            eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
        </Col>
      </div>
    )
  }
}
