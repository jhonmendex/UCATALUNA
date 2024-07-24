
import Libro from "./Libro.ts"

interface Props{
  libro: Libro;
}

const libro:Libro[]=[
  {id:1,titulo:"El principito",autor:"Antoine de Saint-Exupéry",publicacion:1943},
  {id:2,titulo:"El quijote",autor:"Cervantes",publicacion:1605},
  {id:3,titulo:"El codigo Da Vinci",autor:"Dan Brown",publicacion:2003}
]

function Libros(){
  return(
    <>
      <h1>liro</h1>
    </>
  )
}

export default Libros;

