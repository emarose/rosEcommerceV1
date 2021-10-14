import React, {useRef, useEffect} from 'react'
import img1 from './slides/cpu.jpg'
import img2 from './slides/ryzen.jpg'
import img3 from './slides/amd.jpg'
import img4 from './slides/equipo.jpg'
import {ReactComponent as FlechaIzq} from './slides/arrow-left.svg'
import {ReactComponent as FlechaDer} from './slides/arrow-right.svg'


function Slideshow (){
   
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);
  const siguiente = () => {
    const primerElemento = slideshow.current.children[0];

    if(slideshow.current.children.length > 0){
      slideshow.current.style.transition = `400ms ease-out all`;
      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;
      
      const transicion = () =>{
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener('transitionend', transicion);
      }
      slideshow.current.addEventListener('transitionend', transicion)
    
    }
  }
  
  const anterior = () => {
    if(slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

      slideshow.current.style.transition = 'none';
      
      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform=`translateX(-${slideSize}px)`;

      setTimeout(()=>{
        slideshow.current.style.transition = '400ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;

      }, 30);
    }
  }

  useEffect(()=>{
  intervaloSlideshow.current = setInterval(()=>{
    siguiente();
  },4000);

  slideshow.current.addEventListener('mouseenter', ()=>{
    clearInterval(intervaloSlideshow.current);
  });

  slideshow.current.addEventListener('mouseleave', ()=>{
    intervaloSlideshow.current = setInterval(()=>{
      siguiente();
    },4000);
  });
  },[]);
  
  return (

    <div className="ContenedorPrincipal">
      <div className="ContenedorSlideshow" ref={slideshow}>
        
        <div className="Slide">
          <a href="wwww.google.com">
            <img src={img1} alt="img1" />
          </a>
          <div className="TextoSlide">
            <p>AMD Ryzen 5 3600</p>
          </div>
        </div>

        <div className="Slide">
          <a href="wwww.google.com">
            <img src={img2} alt="img2" />
          </a>
          <div className="TextoSlide">
            <p>AMD Ryzen 7 3700x</p>
          </div>
        </div>

        <div className="Slide">
          <a href="wwww.google.com">
            <img src={img3} alt="img3" />
          </a>
          <div className="TextoSlide">
            <p>AMD Wraith Prism RGB</p>
          </div>
        </div>

        <div className="Slide">
          <a href="wwww.google.com">
            <img src={img4} alt="img4" />
          </a>
          <div className="TextoSlide">
            <p>AMD Ryzen Threadripper 3990X</p>
          </div>
        </div>

      </div>

      <div className="Controles">
        <button onClick={anterior} className="Boton">
          <FlechaIzq />  
        </button>
        <button onClick={siguiente} className="Boton Derecha">
          <FlechaDer />  
        </button>
      </div>

    </div> 
  )
};

export default Slideshow;
