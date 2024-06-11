//1.crear un objeto usuario con correo y contrase;
const usuario = {
  correo: "victor@gmail.com",
  pass: "123",
};

function proceder() {
  //2.capturar los datos de usuario y contrase;a DOM
  let emailElemento = document.getElementById("email");
  let passwordElemento = document.getElementById("password");

  //3.comparar los datos del objeto con los datos del DOM
  if (
    usuario.correo === emailElemento.value &&
    usuario.pass === passwordElemento.value
  ) {
    alert("Bienvenido");
  } else {
    alert("Algo fallo");
  }
}
