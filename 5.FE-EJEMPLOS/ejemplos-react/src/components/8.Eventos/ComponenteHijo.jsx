function ComponenteHijo({ clickPadre }) {
  return (
    <>
      <button onClick={clickPadre}>click en el padre</button>
    </>
  );
}

export default ComponenteHijo;
