import React from "react";
import { useState } from "react";
import "../styless/styless.css";
import { Formik, Form } from "formik";

const FrmReservas = () => {
  const [codigo, setCodigo] = useState("");
  const [codigoHabitacion, setCodigoHabitacion] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [telefonoCliente, setTelefonoCliente] = useState("");
  const [fechaReservacion, setFechaReservacion] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envío del formulario o llamada a una función de manejo de datos
  };

  return (
    <div className="formulario-container">
      <Formik
        initialValues={{
          codigo: "",
          codigo_habitacion: "",
          nombre_cliente: "",
          telefono_cliente: "",
          fecha_reservacion: "",
          fecha_entrada: "",
          fecha_salida: ""
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Crear Reservas</h2>

          <label htmlFor="codigo">Código:</label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />

          <label htmlFor="codigo_habitacion">Código de Habitación:</label>
          <input
            type="text"
            id="codigo_habitacion"
            name="codigo_habitacion"
            value={codigoHabitacion}
            onChange={(e) => setCodigoHabitacion(e.target.value)}
            required
          />

          <label htmlFor="nombre_cliente">Nombre del Cliente:</label>
          <input
            type="text"
            id="nombre_cliente"
            name="nombre_cliente"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            required
          />

          <label htmlFor="telefono_cliente">Teléfono del Cliente:</label>
          <input
            type="tel"
            id="telefono_cliente"
            name="telefono_cliente"
            value={telefonoCliente}
            onChange={(e) => setTelefonoCliente(e.target.value)}
            required
          />

          <label htmlFor="fecha_reservacion">Fecha de Reservación:</label>
          <input
            type="date"
            id="fecha_reservacion"
            name="fecha_reservacion"
            value={fechaReservacion}
            onChange={(e) => setFechaReservacion(e.target.value)}
            required
          />

          <label htmlFor="fecha_entrada">Fecha de Entrada:</label>
          <input
            type="date"
            id="fecha_entrada"
            name="fecha_entrada"
            value={fechaEntrada}
            onChange={(e) => setFechaEntrada(e.target.value)}
            required
          />

          <label htmlFor="fecha_salida">Fecha de Salida:</label>
          <input
            type="date"
            id="fecha_salida"
            name="fecha_salida"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
            required
          />

          <input type="submit" value="Enviar" />
        </Form>
      </Formik>
    </div>
  );
};

export default FrmReservas;
