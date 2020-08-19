import React, { Component, useState } from 'react'
import Button from "react-bootstrap/Button"
import TrainingForm from "./Form"

export default class Senioren extends Component {



  render() {

    return (<div>
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