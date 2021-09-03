/*
Con un arreglo (por ejemplo: [1,1,2,2,2,2,3,3,4,5,6,8,9,10]), ¿Cúal es el numero que más se repite?
*/

var arreglo = [1,1,2,2,2,2,3,3,4,5,6,8,9,10];

function obtenerValorMasRepetido(valores){
    return valores.reduce ( (anterior, actual) => {
        if( valores.filter( item => item === anterior ).length > valores.filter( item => item === actual ).length ){
            return anterior;
        }
        else{
            return actual;
        }
    } )
}

console.log("El numero que más se repite en el arreglo es el: " + obtenerValorMasRepetido(arreglo));


