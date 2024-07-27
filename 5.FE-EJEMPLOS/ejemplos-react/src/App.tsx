
import Titulo from "./components/1.CompClase/Titulo.tsx"
import Book from "./components/2.CompFuncion/Book.tsx"
import EstilosMui from "./components/3.EstilosMui/EstilosMui.jsx"
import Libros from "./components/4.Props/ListaLibros.tsx"
import EjemploAlerta from "./components/5.Children/EjemploAlerta.jsx"
import Lista from "./components/6.Listas/Listas.jsx"
import Sesion from "./components/7.RenderizadoCondicional/Sesion.jsx"
import Eventos from "./components/8.Eventos/Eventos.jsx"
import Estados from "./components/9.Estados/ContadorClase.jsx"
import ContadorHook from "./components/9.Estados/ContadorHook.jsx"

function App() {

  //const listaNombres = ["jhon","juan","maria"] 
  //const sesion = true
  return (
    <>
    {/* 
      <h4>Ejemplos react</h4>
      <hr />
      <label htmlFor="">comp funcion</label>
      <Titulo />  
      <hr />
      <label htmlFor="">Componente clase</label>
      <Book/>
      <hr />
      <label htmlFor="">Estiles MUI</label>
      <EstilosMui />
      
      <Libros /> 
      <EjemploAlerta />
      <Lista datos={listaNombres} />
      <Sesion sesion={sesion} />
      <Eventos />*/ }
      <Estados />
      <ContadorHook />
    </>
  )
}

export default App
