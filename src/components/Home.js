import React, { Component, useState } from 'react'
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Jumbotron from "react-bootstrap/Jumbotron"
import VEOCarousel from "./Carousel"
import VEOCard from "./Card"
import TrainingForm from "./Form"
import Picture from "../pictures/2016 Hemelvaartstoernooi wedstrijd.jpg"
import GroupPicture from "../pictures/2015-03-21-groepsfoto-formaat-20x30.jpg"
import Korf from "../pictures/2015-03-21-Opening-nieuwe-clubhuis-54.jpg"
import VeoLogo from "../pictures/veo logo highres.jpg"
import KangoeroeLogo from "../pictures/KangoeroeKlup Logo.png"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Card from "react-bootstrap/Card"

export default class Home extends Component {

  state = {
    showForm: false,
    targetGroup: ""
  }
  // onClickTrainingForm = () => {
  //     this.setState({ 
  //         showForm: this.state.showForm ? false : true 
  //     })
  //     console.log("inside")
  // }

  handleClose = () => { this.setShow(false) }
  handleShow = () => { this.setShow(true) }
  setShow = (show) => { this.setState({ showForm: show }) }

  render() {

    return (<div>

      <Navbar bg="white" expand="lg">
        <Image src={VeoLogo} height="100px" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {!this.state.targetGroup &&
        <Jumbotron className="jumbotron-target-group" >
          <h1>VEO</h1>
          <h3>De allerleukste korfbalvereniging!</h3>

          <Link to="/jeugd">
            <Button variant="primary" size="lg" >Korfbal voor jeugd</Button>
          </Link>
          <Link to="/senioren">
            <Button variant="primary" size="lg" >Korfbal voor volwassenen</Button>
          </Link>
        </Jumbotron>
      }


    </div>)
  }

}