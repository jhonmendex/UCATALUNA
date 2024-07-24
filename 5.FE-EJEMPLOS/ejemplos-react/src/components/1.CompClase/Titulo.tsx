//componente de clase, sin estado(stateless)
import React, { Component } from 'react';
import Parrafo from '../2.CompFuncion/Parrafo.tsx';

interface Props{
  titulo: string;
}

class Titulo extends Component {
  constructor(props:Props) {
    //se crea el componente
    super(props);
  } 

  compomentDidMount(){
     //el componente se monto
  }

  componentDidUpdate(): void {
    //el componente se actualizo
  }

  componentWillUnmount(): void {
    //el componente se dejo de usar
  }

  render() {
    return (
      <>
       <h1>Mi titulo</h1>
       <hr /> 
       <label>leyenda</label>
       <Parrafo/>
      </>
    );
  }
}

export default Titulo;
