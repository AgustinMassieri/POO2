const Figura = require("./figura");

function Rectangulo(id, unidad, ladoA, ladoB){
    Figura.call(this, id, "Rectangulo", unidad);

    this.ladoA = ladoA;
    this.ladoB = ladoB;
}

Rectangulo.prototype = Object.create(Figura.prototype); 
Rectangulo.prototype.constructor = Rectangulo;

Rectangulo.prototype.descripcion = function(){
    var mensaje =  "Figura: Nombre = " + this.nombre + " - Lado A = " + this.ladoA + " - Lado B = " + this.ladoB + " - Unidad = " + this.unidad.nombre;

    return mensaje;
}

Rectangulo.prototype.calcularPerimetro = function(){

    return (2 * this.ladoA) + (2 * this.ladoB); 
}

Rectangulo.prototype.calcularArea = function(){
    
    return this.ladoA * this.ladoB;
}

Rectangulo.prototype.mostrarValores = function(unidadMostrar){
    
    console.log("\t> Lado A (en ", unidadMostrar.nombre, ") = ", this.unidad.pasajeUnidad(unidadMostrar, this.ladoA));
    console.log("\t> Lado B (en ", unidadMostrar.nombre, ") = ", this.unidad.pasajeUnidad(unidadMostrar, this.ladoB));

}

module.exports = Rectangulo;