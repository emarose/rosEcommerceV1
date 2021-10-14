import React from 'react'
import logo from './logo.png'
import { Container, Navbar, Nav } from 'react-bootstrap'


function HeaderMenu() {
  return (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle className="navbar-light" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto">
          <Nav.Link className="navItem" href="#categorias">Categorias</Nav.Link>
          <Nav.Link className="navItem" href="#ofertas">Ofertas</Nav.Link>
          <Nav.Link className="navItem" href="#novedades">Novedades</Nav.Link>
        </Nav>
        <Nav className="me-right">
          <Nav.Link className="navItem" href="#cuenta">Crear cuenta</Nav.Link>
          <Nav.Link className="navItem" href="#ingresar">Ingresar</Nav.Link>
          <Nav.Link className="navItem" href="#compras">Mis compras</Nav.Link>
          <Nav.Link className="navItem" href="#compras"><i class="fas fa-shopping-cart"></i></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>



    // <div className="HeaderMenu-wrap">
    //   <div className="logo">
    //     <img src={logo} alt={"logo"}/> 
    //   </div>
    //   <div className="menu">
    //       <li>Categorias</li>
    //       <li>Ofertas</li>
    //       <li>Novedades</li>
    //       <li>Blog</li>
    //     <div className="menu-usuario">
    //       <li>Crear cuenta</li>
    //       <li>Ingresar</li>
    //       <li>Mis compras</li>
    //       <li className="cart"><i class="fas fa-shopping-cart"></i></li>
    //     </div>
    //   </div>
    // </div>
  )
}

export default HeaderMenu
