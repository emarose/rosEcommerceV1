import Header from './components/Header/Header'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import Slideshow from './components/Slideshow/Slideshow'
import PagosSmallContainer from './components/PagosSmallContainer/PagosSmallContainer'
import Destacados from './components/Destacados/Destacados'
import Ofertas from './components/Ofertas/Ofertas'
import Descubri from './components/Descubri/Descubri'
import Categorias from './components/Categorias/Categorias'
import PreFooter from './components/PreFooter/PreFooter'
import Footer from './components/Footer/Footer'
import MarcasSlideshow from './components/MarcasSlideshow/MarcasSlideshow'
import Producto from './components/Producto/Producto'

import './components/MarcasSlideshow/MarcasSlideshow.css'
import './components/Footer/Footer.css'
import './components/PreFooter/PreFooter.css'
import './components/Categorias/Categorias.css'
import './components/Descubri/Descubri.css'
import './components/Header/Header.css'
import './components/HeaderMenu/HeaderMenu.css'
import './components/Slideshow/Slideshow.css'
import './components/PagosSmallContainer/PagosSmallContainer.css'
import './components/Destacados/Destacados.css'
import './components/Ofertas/Ofertas.css'
import './components/Producto/Producto.css'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"


function App() {
  return (
    <main>
    <Router>
      <Header />
      <HeaderMenu />

        <Switch>
          <Route path="/producto/id">
            <Producto />
          </Route>
          <Redirect path="/home" to="/"/>
          <Route path="/" exact>
            <Slideshow />
            <PagosSmallContainer />
            <Destacados/>
            <Ofertas />
            <Descubri />
            <Categorias />
            <MarcasSlideshow />
            <PreFooter />
          </Route>
        </Switch>
        
      <Footer />
     </Router>
    </main>
   
  );
}

export default App;
