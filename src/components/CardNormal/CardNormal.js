import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CardNormal.css';

function CardNormal(props) {
  return (
  <Card className="CardContainer">
    <Card.Img className="CardImg" variant="top" src={props.img} />
    <Card.Body className="CardBody">
      <Card.Title className="CardTitle">{props.title}</Card.Title>
      <Card.Text className="CardText text-muted">{props.description}</Card.Text>
    </Card.Body>
    <Card.Footer className="CardFooter">{props.price}
      <Button className="CardButton d-block text-center" variant="outline-success">Ver más</Button>
    </Card.Footer>
  </Card>
 
  )
}



export default CardNormal;
