import ComponenteHijo from "./ComponenteHijo.jsx";

const listaNombres = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Maria" },
];

function Eventos() {
  let contador = 0;
  function handleClick() {
    contador++;
    console.log(contador);
  }

  function handleKeyUp() {
    contador--;
    console.log(contador);
  }

  function clickPadre() {
    console.log("click en el padre");
  }

  function handleClickName(nombre) {
    console.log("click en el nombre", nombre);
  }

  return (
    <>
      <button onClick={handleClick}>Incrementar</button>
      <input onKeyUp={handleKeyUp} />
      <ComponenteHijo clickPadre={clickPadre} />
      <ul>
        {listaNombres.map((nombre) => (
          <li key={nombre.id} onClick={() => handleClickName(nombre.nombre)}>
            {nombre.nombre}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Eventos;
