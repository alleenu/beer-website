import './CardBeer.css';

// imagenes por Individual
import cervezaIpa from '../../img/cerveza-IPA.jpeg';
import cervezaAmber from '../../img/cerveza-Amber.jpeg';
import cervezaAnntares from '../../img/cerveza-Anntares.jpeg';
import cervezaIsenbeck from '../../img/cerveza-Isenbeck.jpeg';
import cervezaAndes from '../../img/cerveza-Andes.jpeg';
import cervezaKunstamann from '../../img/cerveza-Kunstmann.jpeg';
import cervazaLagger from '../../img/cerveza-Lagger.jpeg';
import cervezaCumbre from '../../img/cerveza-Cumbre.jpeg'

import PropTypes from 'prop-types';
import Boton from '../Boton/Boton';



function CardBeer(props) {

  // se define el objeto imagenes para mapear el nombre de cada imagen
   const imagenes = {
    "Andes": cervezaAndes,
    "Amber": cervezaAmber,
    "Anntares": cervezaAnntares,
    "Ipa": cervezaIpa,
    "Isenbeck": cervezaIsenbeck,
    "Kunstmann": cervezaKunstamann,
    "Cumbre": cervezaCumbre,
    "Lagger": cervazaLagger,
   };

  // obtenemos la imagen correspondiente al nombre indicado
  const imagen = imagenes[props.imagen] || cervezaAndes; // Cambia 'Andes' por la imagen por defecto

    return (
        <div className="producto">
          <Boton marginLeft='-11rem' marginBottom="10px" color="#8ac926" texto="Nueva Edicción" />
          <a href="#">
            <img className="producto_imagen" src={imagen} width={230} height={230} alt={`Imagen de ${props.nombre}`} />

            <div className="producto_info">
              <p className="producto_nombre"> {props.nombre}</p>
              <p className="producto_color"> <strong>Color:</strong> {props.color}</p>
              <p className="producto_descripcion"><strong>Descripción:</strong><span> {props.descripcion}</span></p>
            </div>
          </a>
        </div>
    );
}
  


CardBeer.propTypes = {
    color: PropTypes.string,
    imagen: PropTypes.any,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    precio: PropTypes.string,
}

export default CardBeer;
