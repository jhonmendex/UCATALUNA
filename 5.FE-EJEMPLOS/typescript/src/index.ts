//variables
let numero: number;
numero = 10;
console.log(numero);

let nombre: string = "Juan";
console.log(nombre);

let booleano: boolean = true;

let variable: any;
variable = "Hola";  
console.log(variable);

//arrays o listas
let numeros: number[] = [1, 2, 3];
console.log(numeros);

//tuplas
let tupla: [number, string] = [1, "Juan"];

//enumeraciones
enum Color {
    Rojo,
    Verde,
    Azul
}

const colorSeleccion:Color = Color.Rojo
console.log(colorSeleccion);


//iterfaces
interface Persona {
    nombre: string;
    edad: number;
}
const persona: Persona = {
    nombre: "Juan",
    edad: 30
}

function saludar(persona: Persona): void {
    console.log(`Hola ${persona.nombre}`);
}

saludar(persona);

//clases
class Persona2 {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola ${this.nombre}`);
    }
}

const persona2: Persona2 = new Persona2("Juan", 30);
persona2.saludar();
