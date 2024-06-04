//Crear clase usuario 
class Usuario {
    #correo;
    #contrasena;
    constructor(correo, contrasena) {
      this.#contrasena = contrasena;
      this.#correo = correo;
    }
  
    getCorreo() {
      return this.#correo;
    }
  
    setCorreo(correo) {
      this.#correo = correo;
    }
  
    getContrasena() {
      return this.#contrasena;
    }
  
    setContrasena(contrasena) {
      this.#contrasena = contrasena;
    }
  }
  
  export default Usuario;