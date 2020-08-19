import React, { Component, useState } from 'react'
import Button from "react-bootstrap/Button"
import TrainingForm from "./Form"

export default class Jeugd extends Component {



  render() {

    return (<div>

        <>
          < Jumbotron className="jumbotron-kids">
            <h1>VEO</h1>
            <h3>De allerleukste korfbalvereniging!</h3>
          </Jumbotron>

          <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button>

          {/* <Image src={KangoeroeLogo} fluid /> */}
          {/* <Image src={Picture} fluid /> */}
          {/* <VEOCard picture={VeoLogo} /> */}

          <TrainingForm
            handleClose={this.handleClose}
            showForm={this.state.showForm}
          />
        </>
    

   
        <>
          <Jumbotron className="jumbotron-adults">
            <h1>VEO</h1>
            <h3>De allerleukste korfbalvereniging!</h3>
          </Jumbotron>

          <TrainingForm
            handleClose={this.props.handleClose}
            showForm={this.props.showForm}
          />
        </>
      

    </div>)
  }

}