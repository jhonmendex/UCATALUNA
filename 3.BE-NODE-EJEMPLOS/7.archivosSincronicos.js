import { readFileSync } from "node:fs";

console.log("operacion 1");
console.log(readFileSync("archivos/archivo1.txt", "utf-8"));
console.log("operacion 2");
console.log(readFileSync("archivos/archivo2.txt", "utf-8"));
console.log("operacion 3");
console.log(readFileSync("archivos/archivo3.txt", "utf-8"));
