const dia = prompt("Ingrese tu fecha de nacimiento");
const mes = prompt("Ingrese tu mes de nacimiento")


let signos;


switch(mes){
    case "marzo":
        signos = dia >= 21 ? "Aries" : "Piscis";
        break;
    case "abril":
        signos = dia >= 20 ? "Tauro" : "Aries";
        break;
    case "mayo":
        signos = dia >= 21 ? "Geminis" : "Tauro";
        break;
    case "junio":
        signos = dia >= 21 ? "Cancer" : "Geminis";
        break;
    case "julio":
        signos = dia >= 23 ? "Leo" : "Cancer";
        break;
    case "agosto":
        signos = dia >= 23 ? "Virgo" : "Leo";
        break;
    case "septiembre":
        signos = dia >= 23 ? "Libra" : "Virgo";
        break;
    case "octubre":
        signos = dia >= 23 ? "Escorpion" : "Libra";
        break;
    case "noviembre":
        signos = dia >= 22 ? "Sagitario" : "Escorpion";
        break;
    case "diciembre":
        signos = dia >= 22 ? "Capricornio" : "Sagitario";
        break;
    case "enero":
        signos = dia >= 23 ? "Acuario" : "Capricornio";
        break;
    case "febrero":
        signos = dia >= 23 ? "Piscis" : "Acuario";
        break;
    default:
        signos = "undefined\nSignos, mi parte insegura, bajo una luna hostil, Signoooooos, ohhhhh<\n-Diosito Cerati"
        break;
}

const frases = [
    "I'm sorry for everybody, and you ",
    "Chocaste con el muro de Berlín ",
    "Te vi... pero te ignoré ",
    "Tú no eres vedette, eres ",
    "Te quisiste lucir ",
    "Bailas "
]

const numeroAleatorio = Math.floor(Math.random() * frases.length)

const obtenerFrase = frases[numeroAleatorio]

alert(obtenerFrase + signos)