import React from 'react'
import { CardGroup, Row, Container } from 'react-bootstrap'
import CardOferta from '../CardOferta/CardOferta'
import './Ofertas.css'
import img1 from '../CardOferta/CardOferta-img/monitor.png'
import img2 from '../CardOferta/CardOferta-img/cooler.png'
import img3 from '../CardOferta/CardOferta-img/hdd purple.png'
import img4 from '../CardOferta/CardOferta-img/geforce gtx1660 super 6gb GDDR6.png'
import img5 from '../CardOferta/CardOferta-img/placa video gigabyte.png'
import img6 from '../CardOferta/CardOferta-img/ryzen7 3800XT.png'



function Ofertas() {
  return (
    <>
      
      <h1 className="m-0 titulo">Ofertas</h1>

        <Container fluid id="ofertas">
        <Row className="RowCards">
          <CardGroup className="CardGroup">
            <CardOferta
            img={img1}
            title="Monitor Samsung F24T35"
            description='Pantalla LED 24" 1920x1080px'
            price="$ 7000.00"
            priceDiscount=" $ 8500.00" />

            <CardOferta 
            img={img2}
            title="Cooler Brainstorm Ar-10"
            description="120mm fan RGB control"
            price="$ 899.98"
            priceDiscount="$ 1559.00" />
            
            <CardOferta 
            img={img3}
            title="Disco Duro WD Purple WD10PURX"
            description="Capacidad 1TB"
            price="$ 5800.00"
            priceDiscount="$ 6600.00" />
            
            <CardOferta 
            img={img4}
            title="Placa de video Gigabyte GeForce RTX1660"
            description="6gb GDDR6 SUPER DUAL"
            price="$ 22000.00"
            priceDiscount="$ 28.600" />

            <CardOferta 
            img={img5}
            title="Placa de video Gigabyte GeForce GTX1660"
            description="6gb GDDR6 OC Ready"
            price="$ 15999.99"
            priceDiscount="$ 18.600" />

            <CardOferta 
            img={img6}
            title="Procesador AMD Ryzen 7 3800XT"
            description="8 Nucleos 4.7Ghz"
            price="$ 44.000"
            priceDiscount="$ 47.600" />
          </CardGroup>
         </Row>
       </Container>
      <p className="vermas">Ver más</p>
    </>
  )
}

export default Ofertas
