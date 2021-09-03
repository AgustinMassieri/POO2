/* ---- CLASE 18-08-2021: POO2 ----

//Tipos de variables:

//1. var -> Alcance a nivel de funcion
//2. let -> Alcance a nivel de bloque
//3. cons -> Alcance a nivel de bloque


//Ejemplo Var

function ejemploVar() {
	var var1 = 10;
	if(var1 === 10) { 	 
  	var var2 = 40;
  	console.log("var1: " + var1 );
  	console.log("var2: " + var2 );
	}
	console.log("var1: " + var1 );
	console.log("var2: " + var2 );
  }

    ejemploVar();



//Ejemplo Let

  function ejemploLet() {
	let let1 = 10;
	if(let1 === 10) { 	 
  	let let2 = 40;
  	console.log("let1: " + let1 );
  	console.log("var2: " + let2 );
	}
	console.log("let1: " + let1 );
	console.log("let2: " + let2 );
  }

  ejemploVar();

  

  //Funcion anonima

  var respuesta = function (nombre){
      console.log("Hola " + nombre + ", soy una funcion anonima!");
  }

  respuesta("Juan");

  

  //Funcion anonima - como parametro: Funcion Callback

  //OPCION 1:
  setTimeout(function(){
      console.log("Saudo en 1 segundo");
  }, 1000);

//---------------------------------------------------

  //OPCION 2:
  var f = function (){
      console.log("Saludo en 1 segundo");
  }

  setTimeOut(f, 1000);

//-----------------------------------------------------

  function fun1(callback){
      console.log("Hola");
      console.log("Hola1");
      callback();
  }

  fun1(function(){
      console.log("He terminado")
  });

//----------------------------------------------------------------------------------------

let presentacionFormal = (nombre, apellido) => "Bienvenido " + nombre + " " + apellido;

function presentarPersona(nombre, apellido, funcionPresentacion){
    console.log(funcionPresentacion(nombre, apellido));
}

presentarPersona("Juan","Garcia",presentacionFormal);


//Funcion Flecha (Arrow):

var a = 10;
var b = 20;

var c = () => a + b;

console.log(c());


//Clausuras

function crearFunc(){
    var nombre = "POO2";

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

var miFunc = crearFunc();
miFunc();



//Sintaxis Spread

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

//---------------------------------------------------------------

var valores = [1, 2, 3];
var numeros = [4, 5, 6];
var totales = [...valores, ...numeros];

console.log(valores);
console.log(...valores, 4);
console.log(totales);



//Crear Arreglos:

let frutas = ["Manzana", "Banana"];
let frutas2 = new Array("Manzana", "Banana");
let frutas3 = new Array(10); 



//forEach(): ejecuta la funcion indicada una vez por cada elemento del array

const array1 = [1, 2, 3, 4, 5, 1, 8, 1];

var f = function(valor){if(valor===1){console.log("Es un 1!")}}

    array1.forEach(
        element => f(element)
    );


  
//map(): crea un nuevo array con los resultados de la llamada a la funcion indicada aplicada a cada uno de sus elementos

var numeros = [1, 5, 10, 15];
var dobles = numeros.map(function(x)
{
    return x * 2;
});

console.log(dobles);



//filter(): crea un nuevo array con todos los elementos que cumplan la condicion implimentada por la funcion dada

const words = ['spray','limit','elite', 'exuberant','present'];

const result = word.filter(word => word.length > 6);



//includes(): determina si una matriz incluye un determionado elemento (devuelve true or false)

const pets = ['cat, 'dog', 'bat'];

console.log(pets.includes('cat'));
console.log(pets.includes('at'));



//EJERCICIO 1:
//Se tiene una muestra de ADN (ejemplo: TTAATTGGAAATTGGG), verificar si dicha muestra contiene la secuencia TTGG..
//De ser verddero imprimir "secuencia encontrada"
//De lo contrario imprimir "secuencia no encontrada"

var secuencia = 'TTAATTGGAAATTGGG';

resultado = secuencia.includes('TTGG');

if (resultado === true){
    console.log("Secuencia encontrada");
} else{
    console.log("Secuencia no encontrada");
}

//EJERCICIO 2:
//Se tiene multiples muestras de ADN
//La muestra debe tener mas de 16 caracteres para ser anilizada ("Muestras no analizables")
//'AATT' imprimir "El paciente tiene ojos azules!"
//'GGAA' imprimir "El paciente tiene ojos cafes!"
//'RRGG' imprimir "El paciente tiene ojos verdes!"

function verificaSecuencia (variable, secuencia){

    resultado = variable.includes(secuencia);
    
    return resultado;
}

var listaDeMuestras = ['ABC','AATTBBBBBBBBBBBBB','GGAABBBBBBBBBBBBB','RRGGBBBBBBBBBBBBB','ABCD'];

listaDeMuestras.forEach(element => {
    
    if( (element.length) > 16){

        if ( verificaSecuencia(element, 'AATT') === true){
            console.log("El paciente tiene ojos azules!");
        } 

        else if ( verificaSecuencia(element, 'GGAA') === true){
            console.log("El paciente tiene ojos cafes!");
        }

        else if ( verificaSecuencia(element, 'RRGG') === true){
            console.log("El paciente tiene ojos verdes!");
        }
    }

    else{
        console.log("Muestra no analizable");
    }
});

//concat(): unir 2 o más arrays

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);



//find(): devuelve el valor del primer elemento del array que cumple la funcion de prueba

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);



//findeIndex(): devuelve el indice del primer elemento de un array que cumpla con la funcion de prueba. 
//En caso contrario devuelve -1.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));



//indexOf(): retorna el rpimer indice en el que se puede enocntrar un elemento dado en el array, o -1 si este no esta presente

var array = [2, 9, 9];

array.indexOf(2);
array.indexOf(7);
array.indexOf(9, 2);
array.indexOf(2, -1);
array.indexOf(2, -3);



//join(): une todos los elementos de una matriz en una cadena y la devuelve

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));



//pop(): elimina el ultimo elemento de un array y lo devuelve

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

console.log(plants);



//push(): añade uno o mas elementos al final de un array y devuelve la nueva longitud del array

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.psuh('cows');

console.log(count);

console.log(animals);



//reduce(): ejecuta una función reductora sobre cada element de un array, devolviendo como resultado un unico valor

const array1 = [1, 2, 3, 4];

const reducer = (acumulator, currentValue) => acumulator + currentValue;

console.log(array1.reduce(reducer));



//shift(): elimina el primer elemento del array y lo retorna

var peces = ['angel', 'payaso', 'mandarin', 'cirujano'];

var eliminado = peces.shift();

console.log(peces);



//slice(): devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

var masculinos = nombres.slice(1, 3);



//splice(): cambia eñ contenido de una array eliminando elementos existentes y/o agregando nuevos elementos

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0 , 'Feb');

months.splice(4, 1, 'May');

*/
