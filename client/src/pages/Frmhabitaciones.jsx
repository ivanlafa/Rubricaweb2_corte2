import React from 'react'

import { useState } from "react";
import "../styless/styless.css";
import { Formik, Form } from "formik";



const Frmhabitaciones = () => {
    // const [codigo, setCodigo] = useState("");
    // const [codigoHabitacion, setCodigoHabitacion] = useState("");
    // const [nombreCliente, setNombreCliente] = useState("");
    // const [telefonoCliente, setTelefonoCliente] = useState("");
    // const [fechaReservacion, setFechaReservacion] = useState("");
    // const [fechaEntrada, setFechaEntrada] = useState("");
    // const [fechaSalida, setFechaSalida] = useState("");
    const [codigo,setCodigo] = useState ("");
    const [numero,setNumero] = useState("");
    const [tipo, setTipo] = useState("");
    const [valor, setValor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de envío del formulario o llamada a una función de manejo de datos
      };
   return (
    <div className="formulario-container">
    <Formik
      initialValues={{
       codigo:"",
       numero:"",
       tipo:"",
       valor:""
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Crear Habitaciones</h2>

        <label htmlFor="codigo">Código:</label>
        <input
          type="text"
          id="codigo"
          name="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
        />

        <label htmlFor="codigo">Numero:</label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />

<label htmlFor="codigo">Tipo:</label>
        <input
          type="text"
          id="tipo"
          name="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        />

<label htmlFor="valor">Valor:</label>
        <input
          type="text"
          id="valor"
          name="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />

        <input type="submit" value="Enviar" />
      </Form>
    </Formik>
  </div>
  )
}

export default Frmhabitaciones
