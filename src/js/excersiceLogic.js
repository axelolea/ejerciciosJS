console.log("Ejercicio 4")

const centimetrosAmetros = altura => altura / 100
const librasAkilos = masa => masa * 0.453592

function calcularIMC(altura, masa){

    const nuevaAltura = centimetrosAmetros(altura)
    const nuevaMasa = librasAkilos(masa)
    return nuevaMasa / nuevaAltura ** 2
}


let altura = parseInt(prompt("Digite su altura en centimetros: "));
let masa = parseInt(prompt("Digite su masa en libras: "));


const imc = calcularIMC(altura, masa)
let estadoIMC;



console.log("El imc de usted es " + imc + ". Su estado es " + estadoIMC)
