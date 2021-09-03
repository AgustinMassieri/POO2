/*
function varlist() {
    return Object.getOwnPropertyNames(this);
}
valor = 200;
console.log(varlist());

//-----------------------------------------------------------------------------

class Persona {

    #dni; // el campo no puede ser accedido directamente
    static #total = 0;
    static claseNombre = "Soy una persona!";
    constructor(nombre,apellido,dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#dni = dni;
        Persona.#total = Persona.#total +1;
    }
    nombreCompleto(){
        return this.apellido + ", " + this.nombre +"( "+ this.#dni+" )";
    }
    static obtenerNombreDeLaClase(){
        return "Soy una persona!";
    }
    totalPersonas(){
        return Persona.#total;
    }
}
let javy = new Persona ("Javier", "Baez", 39437187);
let clau = new Persona ("Claudio", "Lopez", 42456987);


console.log(Persona.obtenerNombreDeLaClase());
console.log(javy.nombreCompleto());
console.log(javy.totalPersonas());

console.log('\n');

console.log(Persona.obtenerNombreDeLaClase());
console.log(clau.nombreCompleto());
console.log(clau.totalPersonas());
*/
//-------------------------------------------------------


class Persona{

    #dni;
    static #total = 0;

    constructor(nombre, apellido, dni, fechaDeNacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#dni = dni;
        this.fechaDeNacimiento = fechaDeNacimiento;
        Persona.#total = Persona.#total +1;
    }

    static get total(){
        return Persona.#total;
    }

    static set total(value){
        Persona.#total = value;
    }

    get edad(){
        return parseInt( (new Date() - this.fechaDeNacimiento) / 31536000000 );
    }

    nombreCompleto(){
        return this.apellido + ", " + this.nombre +"( "+ this.#dni+" ) - Edad: " + this.edad;
    }
}

var javy = new Persona ("Javier", "Baez", 39437187, new Date(1980, 12, 12));
var clau = new Persona ("Claudio", "Lopez", 42456987, new Date(2000, 5, 10));

Persona.total = 10;
console.log(Persona.total);
console.log(clau.nombreCompleto());