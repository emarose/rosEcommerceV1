import React from 'react'
import { CardGroup, Row, Container } from 'react-bootstrap'
import CardNormal from "../CardNormal/CardNormal"
import "../CardNormal/CardNormal.css"
import img1 from '../CardNormal/Card-img/asus turf 700w.jpg'
import img2 from '../CardNormal/Card-img/Gabinete Void RGB ATX.jpg'
import img3 from '../CardNormal/Card-img/i7.jpg'
import img4 from '../CardNormal/Card-img/mouse glorius model d minus white.jpg'
import img5 from '../CardNormal/Card-img/rog strix fusion 700.jpg'
import img6 from '../CardNormal/Card-img/Ryzen 5 5600x.png'

function Destacados() {
  return (
    <>
      <h1 className="titulo">Productos destacados</h1>
      <Container fluid id="destacados">
        <Row className="RowCards">
          <CardGroup className="CardGroup">
            <CardNormal className="card-item"
              img={img1}
              title="Fuente ASUS Turf 650W"
              description="700W black 100V/240V"
              price="$ 5000.00" />

            <CardNormal 
              img={img2}
              title="Gabinete VOID Rgb ATX"
              description="3x USB Rgb Control"
              price="$ 4815.95" />

            <CardNormal
              img={img3}
              title="Procesador Intel Core I7 10700"
              description="8 núcleos 4.8GHz"
              price="$ 32.500" />

            <CardNormal
              img={img4}
              title="Mouse Glorius Model D-Minus "
              description="6 botones, 7500DPI"
              price="$ 2500.00" />
        
            <CardNormal
              img={img5}
              title="Headset ROG Strix Fusion 700"
              description="7.1 Channel Audio"
              price="$ 3650.00" />
      
            <CardNormal
              img={img6}
              title="Procesador AMD Ryzen 5 5600x "
              description="6 núcleos 4.6GHz"
              price="$ 34.000" />
          </CardGroup>
          </Row>
        </Container>
      <p className="vermas">Ver más</p>
    </>
  );
}

export default Destacados;
