import Perro from "./perro.js";

const consultarPerroBtn = document.getElementById("consultar-api");
const imagenPerro = document.getElementById("img-perro");
const nombrePerro = document.getElementById("nom-perro");
const consultaPromesa = document.getElementById("consultar-promesa-local");
const consultaFetch = document.getElementById("consultar-fetch-local");
//sincronia en js
/*
console.log("primero");
function segundo() {
  return "segundo";
}
console.log(segundo());
console.log("tercero");

//asincronia en js
console.log("1");
setTimeout(() => {
  console.log("2");
}, 5000);
console.log("3");
*/
consultarPerroBtn.addEventListener("click", consultarPerro);

function consultarPerro() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      const perro = new Perro("magie", datos.message);
      mostrarPerro(perro);
    });
}

function mostrarPerro(perro) {
  nombrePerro.innerHTML = `<h3>${perro.nombre}</h3>`;
  imagenPerro.setAttribute("src", perro.foto);
}

//crear una promesa
function obtenerDatosLocales() {
  return new Promise((resolve, reject) => {
    const datos = { correo: "jhon@gmail.com", contrasena: "123" };
    if (datos) {
      resolve(datos);
    } else {
      reject(new Error());
    }
  });
}

consultaPromesa.addEventListener("click", consultarUsuarioPromesa);

async function consultarUsuarioPromesa() {
  let datos = await obtenerDatosLocales();
  console.log(datos.correo);
}

consultaFetch.addEventListener("click", consultarUsuarioFetch);

function consultarUsuarioFetch() {
  fetch("http://127.0.0.1:5500/2.HTML-CSS-JS/jhon/js/datos.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);
    })
    .catch((err) => {
      console.log(err);
    });
}
