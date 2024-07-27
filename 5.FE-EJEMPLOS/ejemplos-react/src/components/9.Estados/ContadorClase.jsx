import React, { Component } from "react";

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      nombre: "Juan",
      user: { nombre: "Juan", apellido: "Perez" },
    };
    console.log("componente creado");
  }

  componentDidMount() {
    console.log("componente montado");
  }
  /*
  componentWillUnmount() {
    console.log("componente desmontado");
  } */

  componentDidUpdate() {
    console.log("componente actualizado", this.state.contador);
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
}

export default ContadorClase;
