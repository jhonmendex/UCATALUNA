
import Titulo from "./components/1.CompClase/Titulo.tsx"
import Book from "./components/2.CompFuncion/Book.tsx"
import EstilosMui from "./components/3.EstilosMui/EstilosMui.jsx"
import Libros from "./components/4.Props/Libros.tsx"
function App() {
  return (
    <>
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
    </>
  )
}

export default App
