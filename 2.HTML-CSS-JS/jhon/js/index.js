//variables - tipos
//entrada y salida de datos
//condicionales - operadores
//ciclos
//funciones
//colecciones: listas,arrays,diccionarios
//objetos -- typescript
//Manipulacion DOM
//peticiones a servidores (api fetch)
//  --callcack, --promesas --async await
/*
var usuario = "jhon";
let correo = "jhon@gmail.com";
let contrasena = "123";
numero = "123";
const PI = 31.141592;
console.log("hola mundo" + correo);

if (numero === 123) {
  console.log("es igual");
} else {
  console.log("no es igual");
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (let numero in numeros) {
  console.log(numero);
}

function suma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(suma(1, 2));

let persona = {
  nombre: "jhon",
  apellido: "mendez",
};

console.log(`me llamo ${persona.nombre} y mi apellido es ${persona.apellido}`);

let empleado = new Object();
empleado.nombre = "pedro";
empleado.apellido = "ramirez";

console.log(
  `me llamo ${empleado.nombre} y mi apellido es ${empleado.apellido}`
);
*/
//manipulacion DOM

//OBTENER ELEMENTOS DEL DOM
let tituloElemento = document.getElementById("titulo");
console.log(tituloElemento);

let tituloElemento2 = document.getElementsByTagName("h1");
console.log(tituloElemento2[0]);

let parrafos = document.getElementsByClassName("mi-parrafo");
console.log(parrafos);

let parrafos2 = document.getElementsByName("mi-parrafo2");
console.log(parrafos2[0]);

let tituloElemento3 = document.querySelector(".mi-parrafo");
console.log(tituloElemento3);

let correo = document.querySelector("#email");
//MODIFICAR ELEMENTOS DOM
tituloElemento.innerHTML = "<strong>saludo jhon</strong>";
parrafos2[0].textContent = "SALUDO CURSO FULLSTACK";

for (let parrafo of parrafos) {
  parrafo.addEventListener("click", () => {
    parrafo.style.color = "red";
    parrafo.innerHTML = "<h3>clic</h3>";
    console.log(parrafo.textContent);
    alert(correo.value);
  });
}

function mostrarAlerta() {
  alert("hola todos");
}
