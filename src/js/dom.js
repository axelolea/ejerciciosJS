const elementoH2 = document.querySelector("div.inicio h2")
const elementoH1 = document.querySelector("div.inicio h1")

const username = "axelolea";
const tipo = "Administrador"


elementoH2.textContent = username
elementoH1.textContent = tipo


// Crear elemeto


// padre
const divPadre = document.querySelector("div.inicio")

// nuevohijo
const nuevoHijo = document.createElement("h3")
nuevoHijo.textContent = "Soy un nuevo hijo"

divPadre.appendChild(nuevoHijo)

