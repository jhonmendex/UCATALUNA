export default function Lista({ datos }) {
  return (
    <>
      <h1>Lista de nombres</h1>
      <ul>
        {datos.map((dato, index) => (
          <li key={index}>{dato}</li>
        ))}
      </ul>
    </>
  );
}
