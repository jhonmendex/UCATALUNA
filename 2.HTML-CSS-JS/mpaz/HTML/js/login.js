import Usuario from "./usuario.js";

const usuarioBack = new Usuario("mpaz@gmail.com", "123");

//2.capturar los datos de usuario y contrase;a DOM
const usuarioFront = new Usuario();

//3.comparar los datos del objeto con los datos del DOM
const sesion_btn = document.getElementById("inicio-sesion");
sesion_btn.addEventListener("click", validarUsuario);

function validarUsuario() {
  usuarioFront.setCorreo(document.getElementById("email").value);
  usuarioFront.setContrasena(document.getElementById("password").value);
  if (
    usuarioFront.correo == usuarioBack.correo &&
    usuarioFront.getContrasena == usuarioBack.getContrasena
  ) {
    mostrarAlerta("inicio exitoso", "success");
  } else {
    mostrarAlerta("inicio no exitoso", "danger");
  }
}

function mostrarAlerta(mensaje, tipo) {
  const alerta = document.querySelector("#alerta");
  alerta.style.display = "block";
  alerta.innerHTML = `
     <div class="alert alert-${tipo}" role="alert">
            ${mensaje}
     </div> `;

  setTimeout(() => {
    alerta.style.display = "none";
  }, 5000);
}
