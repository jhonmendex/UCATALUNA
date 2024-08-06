import { useEffect, useState } from "react";

function EjemploUseEfect() {
  const [contador, setContador] = useState(10);
  const [contador2, setContador2] = useState(0);

  function mostrarAlerta() {
    console.log(
      `se ha actualizado el contador1: ${contador} contador2:${contador2}`
    );
  }

  useEffect(mostrarAlerta, [contador, contador2]);

  function contador1() {
    setContador((prev) => prev + 1);
  }

  function contadorFun() {
    setContador2(contador2 - 1);
  }

  return (
    <>
      <p>contador 1: {contador}</p>
      <p>contador 2: {contador2}</p>
      <button onClick={contador1}>click aqui</button>
      <button onClick={contadorFun}>click aqui 2</button>
    </>
  );
}

export default EjemploUseEfect;
