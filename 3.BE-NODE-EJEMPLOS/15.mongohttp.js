import http from "node:http";
import url from "node:url";
import { MongoClient } from "mongodb";

//pull conexion
// pull Connection
const urlBaseDatos =
  "mongodb+srv://jhonmendex:123@clusterbackend.n2cx2ve.mongodb.net/";
const client = new MongoClient(urlBaseDatos);
const dbName = "libreria";

//obtner los datos de mongo\
var servidor = "";

//funcion principal
async function main() {
  await client.connect();
  console.log("Conexión exitosa...");
  const db = client.db(dbName);
  creacionServidor(db);
  escucharServidor();
  return "done.";
}
//crear servidor
function creacionServidor(db) {
  servidor = http.createServer((request, response) => {
    const urlParse = url.parse(request.url);
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);
    console.log(urlParse);
    if (urlParse.pathname === "/" && request.method === "GET") {
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ mensaje: "conexion" }));
    } else if (urlParse.pathname === "/autores" && request.method === "GET") {
      consultarAutores(db)
        .then((autores) => {
          console.log(autores);
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify(autores));
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (urlParse.pathname === "/libros" && request.method === "GET") {
      consultarLibros(db)
        .then((libros) => {
          console.log(libros);
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify(libros));
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (urlParse.pathname === "/libros" && request.method === "POST") {
      let body = "";
      request.on("data", (datos) => {
        body += datos.toString();
      });

      request.on("end", () => {
        const libro = JSON.parse(body);
        crearLibro(db, libro)
          .then((libro) => {
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify(libro));
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  });
}

function crearLibro(db, libro) {
  const collection = db.collection("libro");
  return collection.insertOne(libro);
}

async function consultarAutores(db) {
  const collection = db.collection("autor");
  const autores = await collection.find({}).toArray();
  return autores;
}
async function consultarLibros(db) {
  const collection = db.collection("libro");
  const libros = await collection.find({}).toArray();
  return libros;
}

//escuchar
function escucharServidor() {
  const puerto = process.env.PORT ?? 5500;
  servidor.listen(puerto, () => {
    console.log("servidor en ejecucion en el puerto", puerto);
  });
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log("esto se ejecuta si o si");
    //client.close();
  });
