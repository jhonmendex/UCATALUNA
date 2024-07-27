
import Libro from "./Libro.ts"
import LibroCmp from "./Libro.tsx"
import { Box } from "@mui/material";


interface Props{
  libro: Libro[];
}

const listaLibros:Libro[]=[
  {id:1,titulo:"El principito",autor:"Antoine de Saint-Exupéry",publicacion:1943},
  {id:2,titulo:"El quijote",autor:"Cervantes",publicacion:1605},
  {id:3,titulo:"El codigo Da Vinci",autor:"Dan Brown",publicacion:2003}
]

function ListaLibros(){
  return(
    <>
    <Box sx={{display:"flex", m:5, gap:2}}>
      {
        listaLibros.map((libro)=>(
          <LibroCmp key={libro.id} libro={libro} codigo={libro.id}/>
        ))
      }
    </Box>
    </>
  )
}

export default ListaLibros;

