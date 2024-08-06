import React, { Component } from "react";

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      nombre: "Juan",
      user: { nombre: "Juan", apellido: "Perez" },
    };
    console.log("componente clase creado");
  }

  componentDidMount() {
    console.log("componente clase montado");
  }

  componentWillUnmount() {
    console.log("componente clase desmontado");
  }

  componentDidUpdate() {
    console.log("componente clase actualizado", this.state.contador);
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    console.log("componente de clase renderizado");
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
