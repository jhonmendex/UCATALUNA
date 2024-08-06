import SesionBtn from "../11.Context/sesionBtn.jsx";

export default function Lista({ datos }) {
  return (
    <>
      <h1>Lista de nombres</h1>
      <ul>
        {datos.map((dato, index) => (
          <li key={index}>{dato}</li>
        ))}
      </ul>
      <SesionBtn />
    </>
  );
}
