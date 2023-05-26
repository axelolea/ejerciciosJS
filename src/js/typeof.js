// alert('Estoy vivo nmms!!')

/*

Datos Primitivos

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

- Object ( No es un dato primitivo )

*/

apodoDeFelipe = "El \"amante\" numero 1 de los chilaquiles verdes"
console.log(apodoDeFelipe)

elements = [
    false, // Boolean
    true, // Boolean
    0, // Number
    1, // Number
    "0", // String
    "000", // String
    "1", // String
    NaN, // Number
    Infinity, // Number
    -Infinity, // Number
    "", // String
    "20", // String
    "Twenty", // String
    null, // Object
    undefined // Undefined
]

elements.forEach(
    el => console.log(typeof el)
);