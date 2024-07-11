import Usuario from "./0.clases.js";

const usuarios = [
  new Usuario("jhon@gmail.com", "123"),
  new Usuario("jhon@gmail.com", "123"),
  new Usuario("jhon@gmail.com", "123"),
  new Usuario("jhon@gmail.com", "123"),
];

function obtenerUsuarios() {
  return new Promise((resolve, reject) => {
    if (usuarios.length == 0) {
      reject(new Error("no hay usuarios"));
    }
    setTimeout(() => {
      resolve(usuarios);
    }, 3000);
  });
}
//operaciones con asinc await

async function consultarUsuarios() {
  const consulta = await obtenerUsuarios();
  console.log(consulta);
}
/*
obtenerUsuarios()
  .then((respuesta) => {
    console.log("datos", respuesta);
  })
  .catch((error) => {
    console.error(error);
   }); */
console.log(consultarUsuarios());
console.log("op1");
console.log("op2");
console.log("op3");
