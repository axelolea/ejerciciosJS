class Empleado{

    nombre = "";
    edad = 0;
    rfc = "";
    sueldoPorDia = 0;
    diasPorSemana = 0;

    isr = 31;
    porcentajeNeto = (100 - this.isr) / 100;

    // TODO --> Comentarios, descripcion

    constructor(nombre, edad, rfc, sueldoPorDia, diasPorSemana){
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.sueldoPorDia = sueldoPorDia;
        this.diasPorSemana = diasPorSemana;
    }

    informacion(){
        console.log(`Empleado: ${this.nombre}`)
        console.log(`Edad: ${this.edad} años`)
        console.log(`RFC: ${this.rfc}`)
        console.log(`Sueldo Por Dia: ${this.sueldoPorDia} MXN`)
        console.log(`Dias Por semana: ${this.diasPorSemana}`)
        console.log(`Dias trabajados al mes: ${this.diasLaborados(30)}`)// 22
        console.log(`Dias trabajados a la quincena: ${this.diasLaborados(15)}`)// 11
    }
    informeSalarial(){
        console.log(`Pago mensual bruto: ${this.sueldoBrutoMensual()} MXN`)
        console.log(`Pago quincenal bruto: ${this.sueldoBrutoQuincenal()} MXN`)
        console.log(`Pago mensual neto: ${this.sueldoNetoMensual()} MXN`)
        console.log(`Pago quincenal neto: ${this.sueldoNetoQuincenal()} MXN`)
    }

    diasLaborados(dias){
        const sobrante = dias % 7
        // Bitwise  
        const semanas = ~~(dias / 7) // sin decimales
        return sobrante + (semanas * this.diasPorSemana)
    }

    calcularSueldoBruto(dias){
        const diasLaborados = this.diasLaborados(dias)
        return this.sueldoPorDia * diasLaborados
    }

    sueldoBrutoMensual(){
        return this.calcularSueldoBruto(30)
    }

    sueldoBrutoQuincenal(){
        return this.calcularSueldoBruto(15)
    }

    sueldoNetoMensual(){
        const sueldoBruto = this.sueldoBrutoMensual()
        const sueldoNeto = sueldoBruto * this.porcentajeNeto
        return sueldoNeto.toFixed()
    }
    sueldoNetoQuincenal(){
        const sueldoBruto = this.sueldoBrutoQuincenal()
        const sueldoNeto = sueldoBruto * this.porcentajeNeto
        return sueldoNeto.toFixed()
    }

}


const empleados = [
    ['Pepito', 20, 'PER123456I9U', 200, 5],
    ['Anna', 39, 'ALO263464O9Y', 300, 6],
    ['Cecilia', 23, 'CLM126790E2R', 250, 5],
    ['Raul', 40, 'RMP123456I98', 400, 4],
    ['Pedro', 19, 'PER123456I9U', 180, 6]
].map(datos => new Empleado(...datos))

empleados.forEach(empleado => {
    console.log("<----- Empleado ----->")
    empleado.informacion()
    empleado.informeSalarial()
})