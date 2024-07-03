import { readFile } from "node:fs";

console.log("operacion 1");
readFile("archivos/archivo.txt", "utf-8", (error, datos) => {
  if (error) {
    console.error("errro de lectura", error);
  }
  console.log(datos);
});
console.log("operacion 2");
readFile("archivos/archivo2.txt", "utf-8", (error, datos) => {
  console.log(datos);
});
console.log("operacion 3");
readFile("archivos/archivo3.txt", "utf-8", (error, datos) => {
  console.log(datos);
});
