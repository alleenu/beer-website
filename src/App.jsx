// Estilos
import './App.css'

// Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Componentes
import Header from './componentes/Header/Header'
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Testimonios from './pages/Testimonios';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </Router>
  )
}

export default App
