import Alerta from "./Alerta.jsx";

function EjemploAlerta() {
  return (
    <>
      <Alerta tipo="error">
        <strong>Error</strong>
      </Alerta>
      <Alerta tipo="warning">
        <strong>Warning</strong>
        <p>tienes una advertencia </p>
      </Alerta>
      <Alerta tipo="success">
        <strong>Exito</strong>
        <p>todo salio bien </p>
      </Alerta>
    </>
  );
}

export default EjemploAlerta;
