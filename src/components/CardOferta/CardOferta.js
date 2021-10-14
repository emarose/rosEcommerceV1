import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './CardOferta.css'

function CardOferta(props) {
  return (
    <Card className="CardContainer">
    <Card.Img className="CardImg" variant="top" src={props.img} />
    <Card.Body className="CardBody">
      <Card.Title className="CardTitle">{props.title}</Card.Title>
      <Card.Text className="CardText text-muted">{props.description}</Card.Text>
    </Card.Body>
    <Card.Footer className="CardFooter">
      <div className="CardPriceDiscount">{props.price} <i class="fas fa-tag"></i></div>
      <span className="CardPrice">{props.priceDiscount}</span>
      <Button className="CardButton d-block text-center" variant="outline-success">Ver más</Button>
    </Card.Footer>
  </Card>
 
  )
}

export default CardOferta;