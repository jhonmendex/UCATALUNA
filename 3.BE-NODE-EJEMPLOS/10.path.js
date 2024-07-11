import path from "node:path";

console.log(path.basename("temp/myfile.html"));
console.log(path.sep);

const servidor = "127.0.0.1";
const rutaArchivo = "temp/myfile.html";
const ruta = path.join(servidor, rutaArchivo);

console.log(ruta);
