import React from 'react'

const Habitaciones = () => {
  return (
    <div>
      <p>Mostrar las habitaciones y reservas con botones Guardar,Actualizar, y Eliminar </p><br />
      <p>
        RESERVAS -----
        GET/rooms : consulta todas las habitaciones
GET/rooms/:codigo : consulta la habitacion correspondiente al código
POST/rooms : Crea una nueva habitación</p>
    </div>
  )
}

export default Habitaciones
