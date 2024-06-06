<<<<<<< HEAD
import Usuario from "./usuario.js";

const usuarioBack = new Usuario("m.pazn@gmail.com", "123");

//2.capturar los datos de usuario y contrase;a DOM
const usuarioFront = new Usuario();

//3.comparar los datos del objeto con los datos del DOM
const sesion_btn = document.getElementById("inicio-sesion");
sesion_btn.addEventListener("click", validarUsuario);

function validarUsuario() {
  usuarioFront.setCorreo(document.getElementById("email").value);
  usuarioFront.setContrasena(document.getElementById("password").value);

  validarCredenciales();
  if (
    usuarioFront.correo == usuarioBack.correo &&
    usuarioFront.contrasena == usuarioBack.contrasena
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
=======
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let userData =  {
	email: 'mpaz@gmail.com',
	password: '1234'
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if(userData.email === emailInput.value && userData.password === passwordInput.value) {
    	alert(`Pase al siguiente nivel ${userData.email}`)
	}
    else{
        alert(`Lo sentimos ${userData.email} la clave es incorrecta`)
    }
    
})
>>>>>>> 64772a2d9ea551f9dfa7fb2b052c1dbe13f42345
