//solicitud(request) - cliente - verbo(get,post,put,delete) - por defecto las solicitudes est'an en get
//respuesta(respose) - servidor - datos(json,html,xml,etc)

import http from "node:http";

//datos respuesta
const tareas = [
  { nombre: "tarea1", descipcion: "descripcion 1", estado: false },
  { nombre: "tarea2", descipcion: "descripcion 2", estado: false },
  { nombre: "tarea3", descipcion: "descripcion 3", estado: false },
];

//crear servidor
const servidor = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(tareas));
});
//escuchar
const puerto = process.env.PORT ?? 5500;
servidor.listen(puerto, () => {
  console.log("servidor en ejecucion en el puerto", puerto);
});
//http://localhost:5500
