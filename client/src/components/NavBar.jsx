import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar navbar-dark bg-dark'>
        <div className='d-flex'>
        <Link className='btn btn-dark' to="/"> Inicio</Link>
      <Link className='btn btn-dark' to="/nuevo">Crear Habitaciones</Link>
        </div>
    </div>
  )
}

export default NavBar
