const Figura = require("./figura");

function Cuadrado(id, unidad, lado){
    Figura.call(this, id, "Cuadrado", unidad);
    
    this.lado = lado;
}

Cuadrado.prototype = Object.create(Figura.prototype); 
Cuadrado.prototype.constructor = Cuadrado;

Cuadrado.prototype.descripcion = function(){
    var mensaje =  "Figura: Nombre = " +  this.nombre + " - Lado = " + this.lado + " - Unidad = " + this.unidad.nombre;

    return mensaje;
}

Cuadrado.prototype.calcularPerimetro = function(){

    return 4 * this.lado; 
}

Cuadrado.prototype.calcularArea = function(){
    
    return this.lado * this.lado;
}

Cuadrado.prototype.mostrarValores = function(unidadMostrar){
    
    console.log("\t> Lado (en ", unidadMostrar.nombre, ") = ", this.unidad.pasajeUnidad(unidadMostrar, this.lado));
}

module.exports = Cuadrado;