
import Libro from "./Libro.ts"
import {Card, CardContent, Typography } from "@mui/material";

interface Props{
  libro: Libro;
  codigo:number;
}


function LibroCmp(props:Props){
  
return(
  <>
  <Card>
   <CardContent>
        <span>
            {props.codigo}
        </span>
        <Typography sx={{m:1}} variant="h5">
            {props.libro.titulo}
        </Typography>
        <Typography sx={{m:1}} variant="h6">
            {props.libro.autor}
        </Typography>
        <Typography sx={{m:1}} variant="h7">
            {props.libro.publicacion}
        </Typography>
   </CardContent>
  </Card>
  </>
)

}


export default LibroCmp