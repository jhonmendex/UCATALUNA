import Usuario from "./usuario.js";

const usuarioBack = new Usuario("victor@gmail.com", "123");

const usuarioFront = new Usuario();

const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", validarUsuario);

function validarUsuario() {
    usuarioFront.setCorreo(document.getElementById("email").value);
    usuarioFront.setPass(document.getElementById("password").value);

    if (usuarioFront.getCorreo() == usuarioBack.getCorreo() && usuarioFront.getPass() == usuarioBack.getPass()) {
        mostrarAlert("Bienvenido", "success");
    } else {
        mostrarAlert("Algo fallo", "warning");
    }
}

function mostrarAlert(mensaje, tipo) {
    const alerta = document.querySelector("#alerta");
    alerta.style.display = "block";
    alerta.innerHTML = `
    <div class="alert alert-${tipo}" role="alert">
    ${mensaje}
    </div>
    `;

    setTimeout(
        () => { alerta.style.display = "none"; }, 3000
    );
}