import React from 'react'
import {Image} from 'react-bootstrap'
import c1 from '../public/img/corsair800x253.png'
import c2 from '../public/img/CG_logo_800px.png'
import kseventy from '../public/img/k70.png'
import keyboard from '../public/img/keyboard.png'
import voidImg from '../public/img/void.png'
import polaris from '../public/img/polaris.jpeg'

export default function Sponsor () {
	return (
		<div id="sponsor" style={{width: '90%', margin: '25px auto'}}>
			<p>Our sponsors support us with everything from gear, to give aways, to helping us put on tournaments. You can support both us and our sponsors by clicking on the links below. Any purhcase made on the Corsair website after using one of the links below will be attributed to BaseTradeTV.
		</p>
			<Image style={{width:'70%'}} className="center" src={c1} responsive />
			<div className="flex-container">
				<a className="flex-item" href="http://www.dpbolvw.net/click-8251749-12719987"><Image bsClass="center img" src={kseventy} rounded /></a>
				<a className="flex-item" href="http://www.jdoqocy.com/click-8251749-12828706"><Image bsClass="center img" src={keyboard} rounded /></a>
				<a className="flex-item" href="http://www.kqzyfj.com/click-8251749-12707897"><Image bsClass="center img" src={voidImg} rounded /></a>
				<a className="flex-item" href="http://www.tkqlhce.com/click-8251749-12719684"><Image bsClass="center img" src={polaris} rounded /></a>
			</div>
		</div>
	)
}
