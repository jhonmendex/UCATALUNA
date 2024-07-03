import { readFile } from "node:fs/promises";

console.log("operacion 1");
readFile("archivos/archivo1.txt", "utf-8")
  .then((datos) => {
    console.log(datos);
  })
  .catch((err) => {
    console.error(err);
  });
console.log("operacion 2");
readFile("archivos/archivo2.txt", "utf-8").then((datos) => {
  console.log(datos);
});
console.log("operacion 3");

//ejemplo de funcion autoinvocable
(async () => {
  const archivo3 = await readFile("archivos/archivo3.txt", "utf-8");
  console.log(archivo3);
})();

console.log("operacion 4");
