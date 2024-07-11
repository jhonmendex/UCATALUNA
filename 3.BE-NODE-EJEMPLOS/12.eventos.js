//eventos--> acciones sobre un objeto
//front -- click
//backend -- on, off, onone, end

import { EventEmitter } from "node:events";
const evento = new EventEmitter();

//escuchar eventos
//declaro el nombre del evento
evento.on("mostrarMensaje", (mensaje) => {
  console.log("el mensaje es:", mensaje);
});
evento.on("mostrarError", (error) => {
  console.log("el mensaje es:", error);
});
//emitir eventos
//invocarlos * llamarlos
evento.emit("mostrarMensaje", "mensaje importante");
evento.emit("mostrarError", "error de conexion");
