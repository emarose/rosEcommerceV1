import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import iconoTarjeta from './icono-card.jpg'
import iconoCaja from './icono-box.jpg'
import iconoEscudo from './icono-shield.jpg'

function PreFooter() {
  return (
    <>
      <Container fluid>
        <Row className="rowIconos">
          <Col className="colIconos"><img className="imgIcono" src={iconoEscudo} alt="" />
            <h1>Seguridad, de principio a fin</h1>
            <p>Tus compras se encuentran 100% protegidas desde el comienzo hasta la pos-venta.</p>
            <a href="#">Cómo te protegemos</a>
          </Col>
          <Col className="colIconos"><img className="imgIcono"  src={iconoCaja} alt="" />
            <h1>Envío gratis desde $ 2.500</h1>
            <p>Nuestro compromiso es brindarte la mayor comodidad y cuidando tu bolsillo. Que la distancia no te limite.</p>
            <a href="#">Conocé más</a>
          </Col>
          <Col className="colIconos"><img className="imgIcono" src={iconoTarjeta} alt="" />
            <h1>Elegí cómo pagar</h1>
            <p>Pagá con tarjeta de crédito, débito, efectivo o hasta 12 cuotas con ROSeCreditos.</p>
            <a href="#">Cómo pagar tus compras</a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PreFooter
