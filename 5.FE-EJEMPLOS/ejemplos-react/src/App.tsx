
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
import Menu from "./components/10.Router/Menu.jsx"
import EjemploUseEfect from "./components/9.Estados/EjemploUseEfect.jsx"
import EstadoObjetos from "./components/9.Estados/EstadoObjetos.jsx"
import { BrowserRouter, Route,Routes } from "react-router-dom"; 
import CustomHook from "./components/9.Estados/CustomHook.jsx"
import Formulario from "./components/9.Estados/Formulario.jsx"
import React from "react"
import { useState } from "react"
import ContextoUso from "./components/11.Context/ContextoUso.jsx"
import SesionBtn from "./components/11.Context/sesionBtn.jsx"

export const Context = React.createContext()

 
function App() {
  const [sesion,setSesion] = useState(true)
  const listaNombres = ["jhon","juan","maria"] 
  return ( 
    <>
    
    <BrowserRouter>
    <Context.Provider value={[sesion,setSesion]}>
     <h4>Ejemplos react</h4>
       <Menu />
       <hr />
       <Routes>
        <Route path="/compclase" element={<Titulo /> } />
        <Route path="/compfuncion" element={ <Book/>} />        
        <Route path="/estilosMui" element={ <EstilosMui />} />        
        <Route path="/props" element={<Libros />} />        
        <Route path="/children" element={ <EjemploAlerta />} />        
        <Route path="/listas" element={ <Lista datos={listaNombres} />} />        
        <Route path="/rendcondicional" element={ <Sesion sesion={sesion} />} />        
        <Route path="/eventos" element={ <Eventos />} />        
        <Route path="/estados" element={
          <>
            <Estados />
            <ContadorHook />
            <EjemploUseEfect />
            <EstadoObjetos />
          </>
        } /> 
        <Route path="/ejemplocustomhook" element={<CustomHook/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />       
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/contexto" element={
          <>
          <ContextoUso/>
          <SesionBtn />
          </>
          } />
      </Routes>
      </Context.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
