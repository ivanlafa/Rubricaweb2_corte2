import React, { useState } from 'react';
import "../styless/styless.css";

const data = [
  { codigo: 1, numero: 123, tipo: 'A', valor: 1000 },
  { codigo: 2, numero: 456, tipo: 'B', valor: 2000 },
  { codigo: 3, numero: 789, tipo: 'C', valor: 3000 },
];

const Frmtablehabi = () => {
  const [tableData, setTableData] = useState(data);

  const handleDelete = (index) => {

    console.log("Eliminar elemento en posición", index);
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  const handleUpdate = (index) => {

    console.log("Actualizar elemento en posición", index);
  };

  return (
    <div>
      <button className='btn bg-success m-lg-3'>ver habitaciones</button>
      <button type="button" class="btn btn-warning m-lg-3">Ver reservas</button>
      <h1>Ver Habitaciones</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Número</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.numero}</td>
                <td>{item.tipo}</td>
                <td>{item.valor}</td>
                <td>
                  <button className='btn bg-info  m-lg-3' onClick={() => handleUpdate(index)}>Actualizar</button>
                  <button className='btn bg-danger m-lg-3'onClick={() => handleDelete(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Frmtablehabi;