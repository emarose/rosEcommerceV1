import React from 'react'
import gpu from './gpu.jpg'
import cpu from './cpu.jpg'
import monitor from './monitor.jpg'
import auricular from './auriculares.jpg'
import gabinete from './gabinete.jpg'
import hdd from './hdd.jpg'
import mother from './mother.jpg'
import mouse from './mouse.jpg'
import psu from './psu.jpg'
import ram from './ram.jpg'
import router from './router.jpg'
import teclado from './teclados.jpg'
import { Col, Row, Container } from 'react-bootstrap'

function Categorias() {
  return (
    <>
    <h1 className="titulo m-5" id="categorias">Categorías</h1>
    <Container className="containerCategorias text-center">
      <Row className="rowCategorias">
        <Col className="itemCategorias"><img className="imgCat" src={psu} alt="" /><p>Fuentes</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={gpu} alt="" /><p>Placas de Video</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={cpu} alt="" /><p>Procesadores</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={router} alt="" /><p>Routers</p></Col>

       
      </Row>
      <Row className="rowCategorias">
      <Col className="itemCategorias"><img className="imgCat" src={hdd} alt="" /><p>Discos Duros</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={mother} alt="" /><p>Motherboards</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={mouse} alt="" /><p>Periféricos</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={monitor} alt="" /><p>Monitores</p></Col>
      </Row>
      <Row className="rowCategorias">

        <Col className="itemCategorias"><img className="imgCat" src={auricular} alt="" /><p>Headsets</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={ram} alt="" /><p>Memorias</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={gabinete} alt="" /><p>Gabinetes</p></Col>
        <Col className="itemCategorias"><img className="imgCat" src={teclado} alt="" /><p>Teclados</p></Col>
      </Row>
    </Container>
    </>
  )
}

export default Categorias
