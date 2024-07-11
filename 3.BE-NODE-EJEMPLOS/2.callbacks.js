function login(par1, callback) {
  const usuario = {
    email: "jhosn@gmail.com",
    password: "123",
  };
  console.log(par1);

  return callback(usuario);
}

function verificarUsuario(usuario) {
  if (usuario.email == "jhon@gmail.com" && usuario.password == "123") {
    console.log("inicio exitoso");
  } else {
    console.error("datos no validdos");
  }
}

login("parametro1", verificarUsuario);
