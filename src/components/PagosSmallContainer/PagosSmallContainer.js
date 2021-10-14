import React from 'react';
import './PagosSmallContainer.css';

function PagosSmallContainer() {
  return (
    <div>
      <div className="wrap">
        <div className="row">
          <div className="container-item col-md-3">
            <div className="icono"><i class="far fa-credit-card fa-2x"></i></div>
            <h1>Tarjetas de crédito</h1>
            <p>Ver promociones</p>
          </div>
          
          <div className="container-item col-md-3">
            <div className="icono"><i class="fas fa-file-invoice-dollar fa-2x"></i></div>
            <h1>Transferencia</h1>
            <p>Ver más</p>
          </div>
        
          <div className="container-item col-md-3">
      
            <div className="icono"><i class="fas fa-hand-holding-usd fa-2x"></i></div>
            <h1>Crédito personal</h1>
            <p>Financiamiento</p>
          </div>

          <div className="container-item col-md-3">
            <div className="icono"><i class="fas fa-money-bill fa-2x"></i></div>
            <h1>Efectivo</h1>
            <p>Ver más</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagosSmallContainer;
