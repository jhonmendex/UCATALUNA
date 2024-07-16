class Usuario {
    #correo;
    #pass;
    constructor(correo, pass) {
        this.#correo = correo;
        this.#pass = pass;
    }

    getCorreo() {
        return this.#correo;
    }

    setCorreo(correo) {
        this.#correo = correo;
    }

    getPass() {
        return this.#pass;
    }

    setPass(pass) {
        this.#pass = pass;
    } 
}

export default Usuario;