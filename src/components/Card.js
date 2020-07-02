import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Picture from "../pictures/2015-03-21-groepsfoto-formaat-20x30.jpg"

function VEOCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="https://www.veokorfbal.nl/uploads/2020/02/VEO-Logo-Tim.jpg" /> */}
            <Card.Img variant="top" src={props.picture}/>
            <Card.Body>
                <Card.Title>Wil je een keertje meetrainen?</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
              </Card.Text>
                <Button variant="primary" onClick={_ => console.log('card')}>Dat lijkt me leuk</Button>
            </Card.Body>
        </Card>
    );
}

export default VEOCard;