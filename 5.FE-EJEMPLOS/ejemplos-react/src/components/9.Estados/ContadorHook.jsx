import { useState, useEffect } from "react";

function ContadorHook() {
  const [contador, setContador] = useState(0);
  const [sesion, setSesion] = useState(false);
  const [user, setUser] = useState({
    nombre: "Juan",
    apellido: "Perez",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const incrementar = () => {
    setContador(contador + 1); //con hooks
    //this.setState({ contador: this.state.contador + 1 }); //para clases
  };

  const decrementar = () => {
    setContador(contador - 1); //con hooks
    //this.setState({ contador: this.state.contador - 1 });//para clases
  };

  function actualializacion() {
    console.log("actualizacion del cpm");
  }
  //componentdidUpdate con hook
  useEffect(actualializacion, [contador, sesion]);
  //componentwilmount
  useEffect(() => {
    console.log("componente montado");
  }, []);

  return (
    <div>
      <h4>Conteo: {contador}</h4>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={() => setSesion(!sesion)}>Cerrar sesion</button>
    </div>
  );
}

export default ContadorHook;
