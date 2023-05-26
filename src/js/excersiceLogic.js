console.log("Ejercicio 4")

const centimetrosAmetros = altura => altura / 100;
const librasAkilos = masa => masa * 0.453592;

function calcularIMC(altura, masa){

    const nuevaAltura = centimetrosAmetros(altura)
    const nuevaMasa = librasAkilos(masa)

    return nuevaMasa / nuevaAltura ** 2
}


let altura = parseInt(prompt("Digite su altura en centimetros: "));
let masa = parseInt(prompt("Digite su masa en libras: "));


const imc = calcularIMC(altura, masa);
let estadoIMC;

if (IMC < 16) estadoIMC = 'criterio de ingreso';
else if(IMC <= 16.9) estadoIMC = 'infrapeso';
else if(IMC <= 18.4) estadoIMC = 'bajo peso';
else if(IMC <= 24.9) estadoIMC = 'peso normal';
else if(IMC <= 24.9) estadoIMC = 'sobrepeso';
else if(IMC <= 29.9) estadoIMC = 'obesidad';
else if(IMC <= 34.9) estadoIMC = 'obesidad premorbida';
else if(IMC <= 45) estadoIMC = 'obesidad morbida';
else if(IMC > 45) estadoIMC = 'obesidad hipermorbida';
else estadoIMC = 'Error!!';


console.log("El imc de usted es " + imc + ". Su estado es " + estadoIMC)
