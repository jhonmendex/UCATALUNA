import { AlertTitle } from "@mui/material";
import styled from "styled-components";

const AlertContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid;
  border-radius: 0.5px;
`;

function Alerta({ tipo, children }) {
  const tipoColor = {
    error: "red",
    warning: "yellow",
    success: "green",
  }[tipo];

  return (
    <>
      <AlertContainer style={{ borderColor: tipoColor }}>
        <AlertTitle>{children}</AlertTitle>
      </AlertContainer>
    </>
  );
}

export default Alerta;

/*
    background-color: ${tipo === "error"
      ? "red"
      : tipo === "warning"
      ? "yellow"
      : "green"};
*/
