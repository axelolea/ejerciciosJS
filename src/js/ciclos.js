// Funcion para comprobar si es  un numero
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Registro dato ingresado por prompt
const numeroString = prompt("Ingrese un numero a evaluar")

// Valido dato ingresado
if(isNumber(numeroString)){
    
    // Convierto el numero a entero
    const numero = parseInt(numeroString)
    
    // Compruebo si es mayor a 2
    if(numero > 2){

        // deblaro mi bandera si es primo o no
        let bandera = true;
        // un iterador que dividira el numero
        let divisor = 2;
        // si el divisor llega al numero a dividir
        // la bandera es false, se termina el bucle

        while(divisor <= (numero / 2) && bandera){

            // Obtengo residuo
            const residuo = numero % divisor
    
            // Si el residuo es divisible, entonces no es primo
            if(residuo === 0) bandera = false;

            // aumento el divisor
            divisor++;
        }
        
        // si es true, el numero nu fue divisible, por ende es primo
        if(bandera){
            alert(`Es primo ${numero}`)
        }
        // en caso contrario no es primo
        else{
            alert(`No es primo ${numero}`)
        }
    
    }
    // mostrar alert si es 1 o 2
    else if(numero > 0){
        alert("Ingrese un numero diferente de 1 o 2")
    }
    // mostrar si es un numero menor a 0
    else{
        alert("No ingrese numeros negativos")
    }
}
else
{
    alert("No es un numero")
}