const elemento = prompt("Ingresa el elemento conel que evolucionara Eevee: ").toLocaleLowerCase()

let evolucion;

switch(elemento){
    case agua:
        evolucion = "Vaporeon"
        break;
    case electrico:
        evolucion = "Jolteon"
        break;
    case fuego:
        evolucion = "Flareon"
        break;
    case psiquico:
        evolucion = "Espeon"
        break;
    case siniestro:
        evolucion = "Umbreon"
        break;
    case planta:
        evolucion = "Leafeon"
        break;
    case hielo:
        evolucion = "Glaceon"
        break;
    case hada:
        evolucion = "Sylveon"
        break;
}


if(evolucion){
    alert("Eevee evoluciono a " + evolucion)
}
else{
    alert("Opcion incorrecta")
}