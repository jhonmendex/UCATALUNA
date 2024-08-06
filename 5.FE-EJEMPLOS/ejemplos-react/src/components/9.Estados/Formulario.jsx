import React from "react";
import { useState, useEffect } from "react";
/*
const datos = {
  nombre: "",
  apellido: "",
  edad: "",
}; */

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: "jhon",
    apellido: "",
    edad: "",
  });

  useEffect(() => {
    console.log(formulario);
  }, [formulario]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulario);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="ingrese su nombre"
          onChange={(e) => {
            setFormulario((prev) => {
              return { ...prev, nombre: e.target.value };
            });
          }}
          value={formulario.nombre}
        />
        <input
          type="text"
          placeholder="ingrese su apellido"
          onChange={(e) => {
            setFormulario((prev) => {
              return { ...prev, apellido: e.target.value };
            });
          }}
          value={formulario.apellido}
        />
        <input
          type="number"
          placeholder="ingrese su edad"
          onChange={(e) => {
            setFormulario((prev) => {
              return { ...prev, edad: e.target.value };
            });
          }}
          value={formulario.edad}
        />
        <input onClick={handleSubmit} type="submit" value="enviar datos" />
      </form>
    </>
  );
};

export default Formulario;
