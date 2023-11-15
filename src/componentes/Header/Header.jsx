// useState
import React, { useState } from "react";

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

        <h1 className="header-h1">LOGO</h1>
        <button className="header-btn" onClick={alternarMenu}><ion-icon name="menu-outline"></ion-icon></button>

        <nav className={`header-nav ${menu ? 'mostrar' : ''}`}>
          <a href="/productos" className="nav_enlace" >Productos</a>
          <a href="/testimonios" className="nav_enlace" >Testimonios</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;