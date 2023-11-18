// useState
import React, { useState } from "react";

// Link del React Scroll
import { Link, animateScroll as scroll } from "react-scroll";

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
      <Link 
            activeClass="active"
            to="coverImage" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_enlace"  
        >
           <h1 className="header-h1">LOGO</h1>
        </Link>
     
        <button className="header-btn" onClick={alternarMenu}><ion-icon name="menu-outline"></ion-icon></button>

        <nav className={`header-nav ${menu ? 'mostrar' : ''}`}>
        <Link 
            activeClass="active"
            to="aboutUs" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_enlace"  
        >
          Nosotros
        </Link>
        <Link 
            activeClass="active"
            to="productos" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_enlace"
          >
            Productos
        </Link>
        <Link 
            activeClass="active"
            to="testimonios" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_enlace"  
        >
          Testimonios
        </Link>
        <Link 
            activeClass="active"
            to="contact" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav_enlace"  
        >
          Contacto
        </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;