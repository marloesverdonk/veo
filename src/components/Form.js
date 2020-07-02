import React from 'react'
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function TrainingForm(props) {
  return (
    <Modal show={props.showForm} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Inschrijven proeftraining</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Voornaam</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Achternaam</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Emailadres</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Leeftijdsgroep</Form.Label>
            <Form.Control as="select">
              <option>K</option>
              <option>F</option>
              <option>E</option>
              <option>D</option>
              <option>C</option>
              <option>B</option>
              <option>A</option>
              <option>Senioren</option>
              <option>Recreanten</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Wanneer wil je meetrainen?</Form.Label>
            <Form.Control as="select">
              <option>datum 1</option>
              <option>datum 2</option>
              <option>datum 3</option>
              <option>datum 4</option>
              <option>datum 5</option>
              <option>datum 6</option>
              <option>datum 7</option>
            </Form.Control>
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
           </Button>
        <Button variant="primary" type="submit" onClick={props.handleClose}>
          Save Changes
           </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TrainingForm;