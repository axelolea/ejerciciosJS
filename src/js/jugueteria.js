console.log("<------ Ejercicio 2 ------>")
// Numero de items
const pesoPayaso = 27;
const pesoMunneca = 14;

function calcularPeso(unidades, pesoPorUnidad){

    const pesoCalculado = unidades * pesoPorUnidad

    return pesoCalculado
}


function calcularPesoTotal(nPayasos = 0, nMunnecas = 0){

    const pesoTotalPayasos = calcularPeso(nPayasos, pesoPayaso)
    const pesoTotalMunneca = calcularPeso(nMunnecas, pesoMunneca)

    return pesoTotalPayasos + pesoTotalMunneca
}

// Perso de los items (gr)
const numeroPayasos = parseInt(prompt("Ingresa el numero de payaso: "));
const numeroMunnecas = parseInt(prompt("Ingresa el numero de muñecas: "));

const pesoTotal = calcularPesoTotal(numeroPayasos, numeroMunnecas);
const mensaje = `El peso total del paquete es: ${pesoTotal}gr`;

console.log(mensaje);
alert(mensaje);