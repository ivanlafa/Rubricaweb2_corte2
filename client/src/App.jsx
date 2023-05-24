
import {Routes,Route} from 'react-router-dom'
import Habitaciones from './pages/Habitaciones'
import Formulario from './pages/Formulario'
import Notfound from './pages/Notfound'
import NavBar from './components/NavBar'

function App() {


  return (
    <div className='container'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Habitaciones/>}/>
      <Route path='/nuevo' element={<Formulario/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
  )
}

export default App
