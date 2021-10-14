import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
      <Container fluid className="containerFooter">
        <Row className="rowFooter">
          <Col className="colFooter">
            <ul className="ulFooter">
              <li>Quiénes somos</li>
              <li>Términos y condiciones</li>
              <li>Cuidamos tu privacidad</li>
              <li>Ayuda</li>
            </ul>
            <p>Sitio creado por Emanuel Amerio 2021 </p>
            <Link to="/">Volver</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
