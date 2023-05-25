import React, { useState } from "react";
import "../styless/styless.css";
import { Formik, Form, Field } from "formik";

const Frmhabitaciones = () => {
  const [codigo, setCodigo] = useState("");
  const [numero, setNumero] = useState("");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (values) => {
    setCodigo(values.codigo);
    setNumero(values.numero);
    setTipo(values.tipo);
    setValor(values.valor);

    console.log("Datos del formulario:", values);
  };

  return (
    <div className="formulario-container">
      <Formik
        initialValues={{
          codigo: codigo,
          numero: numero,
          tipo: tipo,
          valor: valor,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Crear Habitaciones</h2>

          <label htmlFor="codigo">Código:</label>
          <Field type="text" id="codigo" name="codigo" />

          <label htmlFor="numero">Número:</label>
          <Field type="text" id="numero" name="numero" />

          <label htmlFor="tipo">Tipo:</label>
          <Field type="text" id="tipo" name="tipo" />

          <label htmlFor="valor">Valor:</label>
          <Field type="text" id="valor" name="valor" />

          <input type="submit" value="Enviar" />
        </Form>
      </Formik>
    </div>
  );
};

export default Frmhabitaciones;

