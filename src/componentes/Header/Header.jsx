// useState
import React, { useState } from "react";

// Link del Router
import { Link } from 'react-router-dom';

//Estilos
import './Header.css';

function Header(){
  //Generar el useState a la constante menú
  const [menu, setMenu] = useState(false);

  //Actualizamos el estado del menú
  function alternarMenu(){
    setMenu(!menu);
  }

  return(
    <header className="header">
      <div className="header-contenido">

      <Link to="/" className="header-enlace"><h1 className="header-h1">LOGO</h1></Link>
        <button className="header-btn" onClick={alternarMenu}><ion-icon name="menu-outline"></ion-icon></button>

        <nav className={`header-nav ${menu ? 'mostrar' : ''}`}>
          <Link to="/" className="nav_enlace">Inicio</Link>
          <Link to="/productos" className="nav_enlace">Productos</Link>
          <Link to="/testimonios" className="nav_enlace">Testimonios</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;