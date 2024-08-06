import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/compclase">Componente clase</Link>
          </li>
          <li>
            <Link to="/compfuncion">componente funcion</Link>
          </li>
          <li>
            <Link to="/estilosMui">estilos MUI</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/children">Children</Link>
          </li>
          <li>
            <Link to="/listas">Listas</Link>
          </li>
          <li>
            <Link to="/rendcondicional">Renderizado condicional</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
          <li>
            <Link to="/estados">Estados</Link>
          </li>
          <li>
            <Link to="/ejemplocustomhook">Ejemplo custom hook</Link>
          </li>
          <li>
            <Link to="/formulario">Ejemplo de formularios</Link>
          </li>
          <li>
            <Link to="/contexto">Ejemplo contexto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
