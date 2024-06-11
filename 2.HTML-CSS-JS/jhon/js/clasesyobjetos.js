//ejemplos de clases y objetos
class Persona {
  #nombre;
  #edad;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  setNombre(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(edad) {
    this.#edad = edad;
  }

  saludar() {
    console.log("saludo persona");
  }
}

class Estudiante extends Persona {
  constructor(carnet, nombre, edad) {
    super(nombre, edad);
    this.carnet = carnet;
  }

  saludar() {
    console.log("saludo estudiante");
  }
}
//herencia
class Usuario extends Persona {
  constructor(nombre, edad, correo, contrasena) {
    super(nombre, edad);
    this.correo = correo;
    this.contrasena = contrasena;
  }

  saludar() {
    console.log("saludo usuario");
  }
}

const persona = new Persona("jhon", 45);
//console.log(persona.nombre);
//polimorfismo
const personas = [
  new Estudiante(123, "javier", 45),
  new Usuario("maria", 65, "maria@gmail.com", "123"),
];
/*
personas.forEach((persona) => {
  console.log(persona.saludar());
}); */

//encapsulaci'on atributos

persona.setNombre("camilo");
console.log(persona.getNombre());
console.log(persona.getEdad());
