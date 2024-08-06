import { Context } from "../../App.tsx";
import { useContext } from "react";

const ContextoUso = () => {
  const [sesion] = useContext(Context);

  return (
    <>
      <h1>la sesion es: {sesion ? "activa" : "inactiva"}</h1>
    </>
  );
};

export default ContextoUso;
