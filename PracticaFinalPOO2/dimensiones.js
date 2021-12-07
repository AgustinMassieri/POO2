function Dimensiones(largo, ancho, profundidad){

    this.largo = largo;
    this.ancho = ancho;
    this.profundidad = profundidad;
}

Dimensiones.prototype.descripcion = function(){
    
    return "Mis dimensiones son: Ancho = ", this.ancho, " - Largo = ", this.largo, " - Profundidad = ", this.profundidad;
}

module.exports = Dimensiones;