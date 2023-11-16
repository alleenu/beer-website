import React from 'react';
import CardBeer from '../componentes/CardBeer/CardBeer';
import dataBeer from '../dataBeer';
import '../componentes/CardBeer/CardBeer.css'

function Productos(){

  return(
    <section className="contenedor">
      <div className="paddingGlobal">
        <h1 className="producto-titulo">PRODUCTOS <em>Descubre el sabor auténtico</em></h1>
        <div className="productos-flex">
          {dataBeer.map((datos, index) =>(
            <CardBeer key={index}
              imagen={datos.imagen}
              nombre={datos.nombre}
              color={datos.color}
              descripcion={datos.descripcion}
            />

          ))}
        </div>
      </div>

    </section>
  );
}

export default Productos;