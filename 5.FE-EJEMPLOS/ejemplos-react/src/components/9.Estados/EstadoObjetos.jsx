import { useState, useEffect } from "react";
import React from "react";

const EstadoObjetos = () => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "Perez",
    edad: 30,
    email: "juan@gmail.com",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  function handleChangeUser(e) {
    setUser({
      ...user,
      nombre: e.target.value,
    });
  }

  return (
    <>
      <input
        type="text"
        onChange={handleChangeUser}
        placeholder="ingrese el nombre"
      />
    </>
  );
};

export default EstadoObjetos;
