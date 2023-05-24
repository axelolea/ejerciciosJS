// Crear una funcion que dada a una distancia recorrid
// y un tiempo dado, calcula la velocidad de un objeto.

console.log("<------ Ejercicio 9 ------>")

// distancia en metros y tiempo en segundos

function calculo_velocidad(distancia, tiempo){
    if (tiempo <= 0 || distancia <= 0) return -1
    const velocidad = distancia / tiempo
    return velocidad
}

console.log(calculo_velocidad(13, 45))
console.log(calculo_velocidad(24, -1))
console.log(calculo_velocidad(-12, 2500))

console.log("<------ Ejercicio 10 ------>")

// Calcular los dos valores que obtiene x en una ecuacion cuadratica
// Dada la ecuacion de Bhaskara
//             ___________
//      -b +- v b^2 - 4ac
// x = ---------------------p
//             2a


function calcular_ecuacion_cuadradica(a, b, c){
    
    const pre_raiz = (b * b) - (4 * a * c)

    if (pre_raiz < 0) return "Resultados en el plano complejo"

    const raiz = Math.sqrt(pre_raiz)

    const denominador = 2 * a
    
    const x_1 = (raiz - b) / denominador
    const x_2 = (- raiz - b) / denominador

    return [x_1, x_2]
}

let values = calcular_ecuacion_cuadradica(2, 8, -10)
console.log(values)

values = calcular_ecuacion_cuadradica(2, 2, 0)
console.log(values)

values = calcular_ecuacion_cuadradica(2, 0, 1)
console.log(values)
