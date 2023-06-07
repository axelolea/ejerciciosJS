class gato {
    nombre = ""
    edad = 0;
    tamanno = ""
    caracter = ""
    numeroVidas = 0;
    color = ""
    raza = ""
    vacunas = false;
    
    constructor(nombre, edad, tamanno, caracter, numeroVidas, color, raza, vacunas){
        this.nombre = nombre
        this.edad = edad
        this.tamanno = tamanno
        this.caracter = caracter
        this.numeroVidas = numeroVidas
        this.color = color
        this.raza = raza
        this.vacunas = vacunas
    }


    imprimirInfo(){
        console.log("El nombre de mi gato es: " , this.nombre);
        console.log("La edad de mi gato es: " , this.edad);
        console.log("El tamanio de mi gato es: " , this.tamanio);
        console.log("El numero de vidas de mi gato es: " , this.numeroVidas);
        console.log("La raza de mi gato es: " , this.raza);
    };

    maullar(){
        console.log("Miauuu");
    };

    rasguniar(){
        console.log("El gato ha rasguniado el sillon");
    };

    ronronear(){
        console.log("Rrrrrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }
}

const juanchoDelCampo = new gatitos ("Juancho Del Campo", 5, "Grande", "Tranquilo", 7, "naranja", "angora", true);
const nenito = new gatitos ("Nenito", 3, "Mediano", "Travieso", 2, "Blanco con naranja", "desconocida", true);


juanchoDelCampo.imprimirInfo();
juanchoDelCampo.cuidarGato();
nenito.imprimirInfo();
nenito.cuidarGato();