//Alcance de variables
//----------------------

1. var --> alcance a nivel de funcion
2. let --> alcance a nivel de bloque
3. const --> alcance a nivel de bloque


//Funciones anónimas
//--------------------

var respuesta = function(nombre){

	console.log("Mi nombre es: " + nombre);
}


//Callbacks
//----------

let presentacionFormal = (nombre, apellido)

	=> "En este caso, presentamos a " +  nombre + "" + apellido;

function presentarPersona(nombre, apellido, funcionPresentacion){

	console.log(funcionPresentacion(nombre, apellido));
}

presentarPersona("Juan", "Garcia", presentacionFormal);


//Arrow Functions
//----------------

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map(material => material.length));


//Clausuras
//----------

function crearFunc(){

	var nombre =  "Programacion Orientada a Objetos 2";

	function mostrarNombre(){
	
		console.log(nombre);
	}

	return mostrarNombre;
}


//forEach() - Arreglos
//---------------------

const array1 = ['a', 'b', 'c'];

array1.forEach( element => {
	console.log(element)
})


//map() - Arreglos
//--------------------

var numeros = [1,2,3,4,5];

var dobles = numeros.map(function(x){

	return x * 2;
})


//filter() - Arreglos
//--------------------

const words = ['hola', 'chau', 'pelota','heladera', 'computadora'];

const results = words.filter( word => word.length > 5);


//includes() - Arreglos
//----------------------

const pets = ['cat', 'dog', 'bat'];

cosole.log(pets.includes('cat')); 
cosole.log(pets.includes('cow'));


//concat() - Arreglos
//-------------------

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f']; 

const array3 = array1.concat(array2);


//find() - Arreglos
//------------------

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(
	element => element > 10
);

console.log(found);


//findIndex() - Arreglos
//-----------------------

const array1 = [5, 12, 8, 130, 44];

console.log(array1.findIndex(12));
console.log(array1.findIndex(3));


//indexOf() - Arreglos
//-----------------------

const array1 = [5, 12, 8, 130, 44];

console.log(array1.indexOf(12));
console.log(array1.indexOf(3));


//join() - Arreglos
//------------------

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join('-'));


//pop() - Arreglos
//----------------- 

const plants = ['broccoli', 'tomato', 'kale', 'cabbage'];

console.log(plants.pop());


//push() - Arreglos
//------------------

const animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));

//reduce() - Arreglos
//--------------------

const array1 = [1, 2, 3, 4];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array1.reduce(reducer))

//shift() - Arreglos
//-------------------

var peces = ['angel', 'payaso', 'bagre', 'dorado', 'mandarin'];

console.log(peces.shift());


//slice() - Arreglos
//-------------------

var nombres = ['Rita', 'Oscar', 'Ramon', 'Pedro', 'Martina', 'Carlos'];

var recorte = nombres.slice(1,3);


//splice() - Arreglos
//--------------------

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');


//Clases (aunque en JS lo que se usan son prototipos!)
//-----------------------------------------------------

class Persona{

	#dni;

	constructor(nombre, apellido, dni){
		this.nombre = nombre;
		this.apellido = apellido;
		this.#dni = dni;
	}

	nombreCompleto(){

		return this.apellido + ", " + this.nombre;
	}
}

let javier = new Persona("Javier", "Baez", 123456);


//Objetos Literales - Prototipos
//-------------------------------

var javier = {
	nombre: "Javier",
	apellido: "Baez",
	fechaDeNacimiento: new Date(1998, 6, 15),
	nombreCompleto: function(){
		return this.apellido + ", " + this.nombre + ", (" + this.fechaDeNacimiento.toLocaleDateString() + ")"
	}
}

//Constructores - Prototipos
//---------------------------

function Persona(nombre, apellido, fechaDeNacimiento){

	this.nombre = nombre;
	this.apellido = apellido;
	this.fechaDeNacimiento = fechaDeNacimiento;

	this.nombreCompleto = function(){
		return this.apellido + ", " + this.nombre + "(" + this.fechaDeNacimiento.toLocaleDateString() + ")"
	}
}

var carlos = new Persona("Carlos", "Alvarez", new Date());
console.log(carlos.nombreCompleto());

//Cadena de prototipos + miembro privado (id)
//---------------------------------------------

function Vehiculo(id, nombre, listaDeCombustible) {

    var id = id; //------- Aplicacion de miembro privado
    this.nombre = nombre;
    this.tipoDeCombustible = listaDeCombustible;

    this.getId = function(){ //------- Aplicacion de miembro privado
        return id;
    }

}

Vehiculo.prototype.description = function(){
    
    var mensaje =  "\n> Soy un Vehiculo llamado: " + this.nombre + " .Mi id es: " + this.getId() + ".";
    return mensaje;
}

//--------- Aplico la cadena de prototipos

function Auto(id){

    Vehiculo.call(this, id, "Auto  ", ["Regular", "Premium"]);
}

Auto.prototype = Object.create(Vehiculo.prototype); 
Auto.prototype.constructor = Auto;

Auto.prototype.description = function(){

    var mensaje = "\n> Soy un Auto y mi Id es: " + this.getId() + ". Mis tipos de combustible son: " + this.tipoDeCombustible;
    return mensaje;
}


//Factory Method
//---------------

function VehiculosFactory(){
    this.contador_id = 0;
}


VehiculosFactory.prototype.description = function(){

    var mensaje = "\n--> Soy la VehiculosFactory";
    return mensaje;
}

VehiculosFactory.prototype.createVehiculo = function(cantidadRuedas){

    if( cantidadRuedas == 2 ) {
        this.contador_id += 1;
        return new Moto(this.contador_id);
    }

    else if( cantidadRuedas == 4 ) {
        this.contador_id += 1;
        return new Auto(this.contador_id);
    }

    else if( cantidadRuedas == 6  ) {
        this.contador_id += 1;
        return new Camion(this.contador_id);
    }

    console.log('\n> No se encontro ese vehiculo en la VehiculosFactory!');

}


//IIFE
//-----

var john = function(){

	var obj = {};

	var name = "John";
	var age = 10;

	obj.greet = function(){
		console.log(name + " has " + age + " years.");
	}

	return obj;
}

var j = john();
j.greet();


//Modulos Literales
//------------------

var moduloMatematico = {
	calcularResta: function(a,b){
		return a - b;
	}

	calcularSuma: function(a,b){
		return a + b;
	}
}


//Module Pattern
//---------------

var Formulas = (function(){

    var iva = 0.18;

    return {
        calcularIva: function(monto) {
            return monto * iva;
        },
        calcularMontoSinIva: function(monto){
            return monto / (1 + iva);
        }
    };

})();


//Revealing Module Pattern
//-------------------------

var Formulas = (function(){

    var iva = 0.18;

    function calcularIva(monto) {
        return monto * iva;
    }

    function calcularMontoSinIva(monto){
        return monto / (1 + iva);
    }

    return {
    	calculateIVA: calcularIva,
    	calculateMontoSinIVA: calcularMontoSinIva
    };

})();


//TDD (primero escribimos el test y recien ahi vemos la parte del codigo!)
//-------------------------------------------------------------------------

function sum(a, b){

	return a + b;
}

//En "sum.test.js":

test('adds 1 + 2 to equal 3', () => {

	expect(sum(1,2)).toBe(3);
});


//Refactorizacion
//----------------

//> Trabajar bajo el paradigma de objetos! Cada objeto debe "encargarse" de lo suyo.
//> Evitar IFs (debemos dejar a los objetos que solucionen esas cosas)
//> Nombres de variables, metodos y atributos claros!
//> Evitar codigos extensos!
//> Comentar brevemente el codigo para facilitar la comprension!
//> Utilizacion de Patrones de diseño
//> Tener en cuenta la accesibilidad de los parametros (privados - publicos)
//> Dividir en archivos tanto los objetos como los tests.
//> No repetir codigo!


//Null Object Pattern
//--------------------

function NullBird() {
    this.sound = function(){
        return "Silence.";
    }
}

function Pidgeon(name){
    this.sound = function(){
        return "Tweer!!! Tweet!!";
    }
}

function getAnimal(type){

    return type === 'Pidgeon' ? new Pidgeon() : new NullBird();
}

console.log(['Pidgeon', null].map( (bird) => getAnimal(bird).sound() ));