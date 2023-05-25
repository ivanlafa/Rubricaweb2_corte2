import React from "react";
import { useState } from "react";
import "../styless/styless.css";
import { Formik, Form, Field } from "formik";

const FrmReservas = () => {
  const [codigo, setCodigo] = useState("");
  const [codigoHabitacion, setCodigoHabitacion] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [telefonoCliente, setTelefonoCliente] = useState("");
  const [fechaReservacion, setFechaReservacion] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");

  const handleSubmit = (values) => {
    setCodigo(values.codigo);
    setCodigoHabitacion(values.codigoHabitacion);
    setNombreCliente(values.nombreCliente);
    setTelefonoCliente(values.telefonoCliente);
    setFechaReservacion(values.fechaReservacion);
    setFechaEntrada(values.fechaEntrada);
    setFechaSalida(values.fechaSalida);

    console.log('datos del formulario ', values)
  };

  return (
    <div className="formulario-container">
    <Formik
      initialValues={{
        codigo: codigo,
        codigoHabitacion: codigoHabitacion,
        nombreCliente: nombreCliente,
        telefonoCliente: telefonoCliente,
        fechaReservacion: fechaReservacion,
        fechaEntrada:fechaEntrada,
        fechaSalida:fechaSalida,
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Crear Reservas</h2>

        <label htmlFor="codigo">Código:</label>
        <Field type="text" id="codigo" name="codigo" />

        <label htmlFor="codigoHabitacion">Codigo Habitacion:</label>
        <Field type="text" id="codigoHabitacion" name="codigoHabitacion" />

        <label htmlFor="nombreCliente">Nombre Cliente:</label>
        <Field type="text" id="nombreCliente" name="nombreCliente" />

        <label htmlFor="telefonoCliente">Telefono Cliente:</label>
        <Field type="text" id="telefonoCliente" name="telefonoCliente" />

        <label htmlFor="fechaReservacion">Fecha Reservacion:</label>
        <Field type="date" id="fechaReservacion" name="fechaReservacion" />

        <label htmlFor="fechaEntrada">Fecha Entrada:</label>
        <Field type="date" id="fechaEntrada" name="fechaEntrada" />

        <label htmlFor="fechaSalida">Fecha Salida:</label>
        <Field type="date" id="fechaSalida" name="fechaSalida" />

        <input type="submit" value="Enviar" />
      </Form>
    </Formik>
  </div>
  );
};

export default FrmReservas;
