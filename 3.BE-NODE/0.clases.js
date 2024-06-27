class Usuario {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  mostrarCorreo() {
    return this.email;
  }
}

export default Usuario;

//estructucturar un objeto
// const usuario1 = new Usuario("jhon@gmail.com", "123");

// //destructuracion de objetos
// const { email, password } = usuario1;
// console.log(usuario1);

// console.log(email);
// console.log(password);
