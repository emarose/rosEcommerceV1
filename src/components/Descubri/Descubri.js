import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import img from './imagenMonitor.png'
import img2 from './imagenNote.png'
function Descubri() {
  return (
    <>
      <Container fluid className="containerDescubri" id="novedades">

        <Card id="cardDescubriLeft">
          <Card.Img variant="bottom" src={img} className="imgDescubri img-fluid" />
          <Card.Body>
            <Card.Title className="descubriTitulo">Tus marcas favoritas</Card.Title>
            <Card.Text className="descubriText">
              40% OFF Y HASTA 6x SIN INTERÉS
            </Card.Text>
            <Button variant="primary">Ver más</Button>
          </Card.Body>
        </Card>
        
        <Card id="cardDescubriRight">
        <Card.Img variant="bottom" src={img2} className="imgDescubri img-fluid" />
          <Card.Body>
            <Card.Title className="descubriTitulo">Notebooks</Card.Title>
            <Card.Text className="descubriText">
              30% OFF Y HASTA 12x SIN INTERÉS
            </Card.Text>
            <Button variant="primary">Ver más</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Descubri
