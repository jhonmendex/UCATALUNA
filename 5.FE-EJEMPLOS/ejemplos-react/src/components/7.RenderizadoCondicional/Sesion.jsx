export default function Sesion({ sesion }) {
  return <>{sesion ? <h5>Bienvenido</h5> : <h5>Inicie sesion</h5>}</>;
}
