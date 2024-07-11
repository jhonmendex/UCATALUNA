function Usuario(email, password) {
  this.email = email;
  this.password = password;
}

const miUsuario = new Usuario("jhon@gmail.co", "123");

Usuario.prototype.saludar = function () {
  return `hola mi correo es ${this.email}`;
};

console.log(miUsuario.saludar());
