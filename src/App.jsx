// Estilos
import './App.css'

//Componentes
import Header from './componentes/Header/Header'
import Productos from './pages/Productos';


function App() {
  return (
    <div>
      <Header />
      <section id='coverImage'>  {/* Portada Imagen principal */}
         <div>
          <p>Va la imagen</p>
          </div>
      </section>

      <section id='aboutUs'  style={{backgroundColor: 'aquamarine'}} > {/* Section About Us */}
        <div className='contenedor'>
          <h1>Nostroso</h1>
        </div>
      </section>
     
      <section id="productos"> {/* Section Productos */}
        <Productos />
      </section>


      <section id="testimonios" style={{backgroundColor: 'LightSteelBlue'}}> {/* Section Testimonio */}
        <div className='contenedor'>
          <h1>TESTIMONIO</h1>
          <br />
            <p> van los componentes del testimonio</p>
        </div>
      </section>


      <section id='contact' style={{backgroundColor: 'SandyBrown'}} >  {/* Section Contact */}
        <div className="contenedor">
          <h1>Contactos</h1>
        </div>

      </section>

    </div>
  )
}

export default App
