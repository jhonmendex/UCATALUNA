//donde quiero renderizar mi componente
const app = document.getElementById("app");

//qué componente quiero renderizar
const title = document.createElement("h1");
title.textContent = "CURSO DE FULLSTACK";
title.style.color = "red";
//renderizar
app.appendChild(title);

const parrafo = document.createElement("p");
parrafo.textContent = "2024";
app.appendChild(parrafo);
