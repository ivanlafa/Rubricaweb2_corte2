import React from 'react'
import "../styless/styless.css";



const data = [
    { codigo: 1, numero: 123, tipo: 'A', valor: 1000 },
    { codigo: 2, numero: 456, tipo: 'B', valor: 2000 },
    { codigo: 3, numero: 789, tipo: 'C', valor: 3000 },
  ];

const Frmtablehabi = () => {
  return (
    <div>
         <button className='btn bg-success'>ver habitaciones</button>
         <h1>Ver Habitaciones</h1>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Número</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.codigo}</td>
              <td>{item.numero}</td>
              <td>{item.tipo}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     
    </div>
  )
}

export default Frmtablehabi
