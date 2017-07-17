import React, {Component} from 'react'
import NavbarComponent from './Navbar'
import {Image} from 'react-bootstrap'
import Modal from './Modal'
import banner from '../public/img/BST_BannerText.png'


export default class App extends Component{

  constructor(props) {
    super(props)
    this.state = {showModal: false}
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal () {
    this.setState({showModal: false})
  }

  openModal (modalObj) {
    this.setState({showModal: true, modalObj: modalObj})
  }

  render () {

    return (
      <div>
        {this.state.showModal ? <Modal closeModal={this.closeModal} modalObj={this.state.modalObj}/> : null}
        <NavbarComponent/>
        <div className="relative banner">
          <Image src={banner} width="80%" responsive bsClass="banner center img"/>
        </div>
        <div id="content" className="relative">
          {React.cloneElement(this.props.children, { openModal: this.openModal})}
        </div>
      </div>
    )
  }
}
