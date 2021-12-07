const Figura = require("./figura");

function Circulo(id, unidad, diametro){
    Figura.call(this, id, "Circulo", unidad);

    this.diametro = diametro;
}

Circulo.prototype = Object.create(Figura.prototype); 
Circulo.prototype.constructor = Circulo;

Circulo.prototype.descripcion = function(){
    var mensaje =  "Figura: Nombre = " + this.nombre + " - Diametro = " + this.diametro + " - Unidad = " + this.unidad.nombre;

    return mensaje;
}

Circulo.prototype.calcularPerimetro = function(){

    return 2 * (this.diametro / 2) * Math.PI; 
}

Circulo.prototype.calcularArea = function(){
    
    return Math.PI * Math.pow((this.diametro / 2), 2);
}

Circulo.prototype.mostrarValores = function(unidadMostrar){
    
    console.log("\t> Diametro (en ", unidadMostrar.nombre, ") = ", this.unidad.pasajeUnidad(unidadMostrar, this.diametro));
}

module.exports = Circulo;