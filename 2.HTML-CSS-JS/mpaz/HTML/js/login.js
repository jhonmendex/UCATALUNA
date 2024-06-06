import Usuario from "./usuario.js";

//const usuarioBack = new Usuario("mpaz@gmail.com", "123");

//2.capturar los datos de usuario y contrase;a DOM
const usuarioFront = new Usuario();

//3.comparar los datos del objeto con los datos del DOM
const sesion_btn = document.getElementById("inicio-sesion");
sesion_btn.addEventListener("click", validarUsuario);

function validarUsuario() {
  usuarioFront.setCorreo(document.getElementById("email").value);
  usuarioFront.setContrasena(document.getElementById("password").value);

  validarCredenciales();
  
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

async function validarCredenciales() {
  const solicitud = await fetch(
    "https://665aad07003609eda45e7c79.mockapi.io/api/v1/prueba"
  );
  const datos = await solicitud.json();
  const user = datos.find(
    (usuario) => usuario.email === usuarioFront.getCorreo()
  );
  console.log(usuarioFront);
  if (
    usuarioFront.getCorreo() == user.email &&
    usuarioFront.getContrasena() == user.contrasena
  ) {
    mostrarAlerta("inicio exitoso", "success");
  } else {
    mostrarAlerta("inicio no exitoso", "danger");
  }
}
