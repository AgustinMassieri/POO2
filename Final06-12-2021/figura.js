function Figura(id, nombre, unidad){

    this.nombre = nombre;
    this.unidad = unidad;

    var id = id;

    this.obtenerId = function(){
        return id;
    }
}

Figura.prototype.descripcion = function(){
    var mensaje =  "Figura: Nombre = " + this.nombre + " - Unidad = " + this.unidad.nombre;
    
    return mensaje;
}

Figura.prototype.calcularPerimetro = function(){

}

Figura.prototype.calcularArea = function(){

}

Figura.prototype.mostrarValores = function(unidadMostrar){

}

module.exports = Figura;