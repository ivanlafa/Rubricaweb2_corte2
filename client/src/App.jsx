
import {Routes,Route} from 'react-router-dom'
import Habitaciones from './pages/Habitaciones'
import FrmReservas from './pages/FrmReservas'
import Notfound from './pages/Notfound'
import NavBar from './components/NavBar'
import Frmhabitaciones from './pages/Frmhabitaciones'
import Login from './pages/Login'



function App() {


  return (
    <div className='container'>
    <NavBar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Habitaciones/>}/>
      <Route path='/nuevo' element={<FrmReservas/>}/>
      <Route path='/habitaciones' element={<Frmhabitaciones/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
  )
}

export default App
