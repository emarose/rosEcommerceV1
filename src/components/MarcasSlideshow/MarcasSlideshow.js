import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import img1 from './bannerasus1.jpg'
import img2 from './bannerasus2.jpg'
import img3 from './bannerlogitech1.jpg'

function MarcasSlideshow() {
  return (
    <>
      <Container className="mt-5">
        <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
          <Carousel.Item className="CarouselItem">
            <img src={img1} alt="" />
          </Carousel.Item>

          <Carousel.Item className="CarouselItem">
            <img src={img2} alt="" />
          </Carousel.Item>

          <Carousel.Item className="CarouselItem">
            <img src={img3} alt="" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default MarcasSlideshow
