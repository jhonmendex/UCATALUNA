import { useContext } from "react";
import { Context } from "../../App.tsx";

const SesionBtn = () => {
  const [sesion, setSesion] = useContext(Context);

  function handleSesion() {
    setSesion(!sesion);
  }

  return (
    <>
      <button onClick={handleSesion}>
        {sesion ? "cerrar sesion" : "iniciar sesion"}{" "}
      </button>
      <b>Sesión: {sesion ? "abierta" : "cerrada"}</b>
    </>
  );
};

export default SesionBtn;
