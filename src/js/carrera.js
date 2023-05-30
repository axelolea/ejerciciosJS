// Creo lista de corredores
// Su indice indica el valor de su posicion

// Para un array de N elementos
// Posicion 0: Ultima Posicion
// Posicion N: Primera posicion

let corredores = [
    "Sofia",
    "Ramiro",
    "Jorge",
    "Andrea",
    "Roberto",
]


// Cosas antes de iniciar

// Interprecacion de rango y indice en un array

// lenght  0       1       2       3       4       5
//         +-------+-------+-------+-------+-------+
//         | value | value | value | value | value |
//         +-------+-------+-------+-------+-------+
// indice      0       1       2       3       4

// Para rangos de posiciones en un array se usa un rango de longitud
// Por eso cuando queremos un rango de 3 elementos, se hace con
// con un (0,3), por eso en muchos libros lo interprentan como (0, i + 1)
// i se refiere al indice del elemento que queremos incluir en ese rango
// por es le se agrega una unidad a i quedando como
// (0, lenght) === (0, i + 1)

function adelanteDe (corredor1, corredor2) {
    
    // <---- Obtener posiciones de los corredores con el nombre ---->

    // Corredor "Nombre" = indice n
    // indice = arrayDeCorredores.indexOf("Nombre del corredor")
    const posicion1 = corredores.indexOf(corredor1)
    const posicion2 = corredores.indexOf(corredor2)


    // <---- Eliminar el elemento de la posicion1 ---->

    // con la funcion splice, eliminaremos 1 elemento en posicion1
    // Por eso la funcion queda

    // NOTA: la funcion splice, devuelve un arreglo con los elementos que
    // extraimos del Array

    // ["nombre1"] = arrayDeCorredores.splice(posicion1, 1)

    const corredor = corredores.splice(posicion1, 1)

    // para un ejemplo array.splice(2, 1)
    // vamos a retira 1 elemento en la posicion 2
    // en este caso nombre_!
    // Array
    // +-------+-------+----------+-------+-------+
    // | value | value | nombre_1 | value | value |
    // +-------+-------+----------+-------+-------+
    
    // El array cambia a lo de abajo      | y el splice devuelve un nuevo array
    //                                      con los valores que eliminamos del array
    //                                      oriignal
    // +-------+-------+-------+-------+    +---------+
    // | value | value | value | value | => | nombre1 | 
    // +-------+-------+-------+-------+    +---------+   
    //

    // <---- Ingresamos el valor eliminado despues de posicion2 ----->

    // como en operacion anterios, splice nos devuelve un array de 1 elementos
    // sera nesesario obtener solo el primer elemento, con corredor[0]
    corredores.splice(posicion2, 0, corredor[0])

}

function salir (corredorName){
    // obtenermos la posicion del corredor con indexOf
    const corredor = corredores.indexOf(corredorName)

    // en esta ocasion lo que hacemos es obtener 2 array y concatenarlos

    // Array
    // +--------+--------+--------+--------+--------+
    // | value1 | value2 | value3 | value4 | value5 |
    // +----- --+--------+--------+--------+--------+


    // ArrayA = Array.slice(0,2)
    // +--------+--------+
    // | value1 | value2 |
    // +----- --+--------+

    // ArrayB = Array.slice(3)
    //                             +--------+--------+
    //                             | value4 | value5 |
    //                             +----- --+--------+

    // nuevoArray = ArrayA.concat(ArrayB)
    // +--------+--------+       +--------+--------+
    // | value1 | value2 |   +   | value4 | value5 |
    // +----- --+--------+       +----- --+--------+

    // nuevoArray
    // +--------+--------+--------+--------+
    // | value1 | value2 | value4 | value5 |
    // +----- --+--------+----- --+--------+

    // Obtenemos los 2 segmentos
    const arrayA = corredores.slice(0, corredor)
    // agragamos un +1, para no incluir al competirdor que queremos eliminar
    const arrayB = corredores.slice(corredor + 1)
    
    // unimos los 2 segmentos
    const nuevoArray = arrayA.concat(arrayB)

    // como la funcion slice no modifica el arraglo original
    // debemos de asignarle el nuevo array a array de los competidores
    // para actualizarla de los cambios
    corredores = nuevoArray
}

function bajaPosicion (corredorNombre, nPosiones) {

    // obtenermos la posicion del corredor con indexOf
    
    const posicionCorredor = corredores.indexOf(corredorNombre)

    // hacemos lo mismo que en la funcion de adelante De
    // pero en esta ocasion usaremos magia avanzada

    // Si sabemos que vamos a recibir un array de un elemento
    // lo mejor sera obtener solo ese valor

    // Destructuring Assignment - MDN

    // ejemplo:

    // [a, b] = [10, 20]
    // console.log(a) // Imprime 10
    // console.log(b) // Imprime 20

    // hacemos el Destructuring con el array de 1 elemento, y se lo asignamos a corredor
    const [ corredor ] = corredores.splice(posicionCorredor, 1)

    // A la posicion original del corredor, le restamos el numero de posiciones que esta en
    // el parametro nPosiciones

    corredores.splice(posicionCorredor - nPosiones, 0, corredor)

}

function imprimirCompetidores(){
    // hago una copia del array con slice, al no colocar nada me devuelve el mismo array
    const copyArr = corredores.slice()

    // a la copia del array le hago un reverse
    // recordemos que la posicion iba de la menor a la mayor
    copyArr.reverse()

    // la funcion forEach, itera todo el array, dentro de la funcion
    // le colocamos una funcion anonima, que va a ejecutar por cada elemento del array
    // y los parametros que recive son, el elemento en si, y el indice del elemento

    copyArr.forEach(function (el, i) {
        // imprimimos en consola la posicion del elemento + 1
        // para que no inicie en 0
        // y colocamos el elemento, que es el nombre del corredor
        console.log(`${i + 1}.- ${el}`)
    })
}


// Posiciones iniciales
imprimirCompetidores()

adelanteDe("Jorge", "Roberto")
adelanteDe("Ramiro", "Jorge")

salir("Roberto")

bajaPosicion("Andrea", 1)

// Ingresamos jose a bajo de la lista
corredores.unshift("Jose")

// Despues de las 3 vueltas
imprimirCompetidores()
