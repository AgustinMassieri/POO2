function Mueble(nombre, dimensiones, color, precio, id){

    var dimensiones = dimensiones;
    var id = id;

    this.nombre = nombre;
    this.precio = precio;
    this.color = color;

    this.obtenerDimensiones = function(){
        return dimensiones;
    }

    this.obtenerId = function(){
        return id;
    }
}

Mueble.prototype.descripcion = function(){

    return "Mueble: Nombre = ", this.nombre, " - Precio = $", this.precio, " - Color = ", this.color, " - Dimensiones = ", this.obtenerDimensiones();  
}

module.exports = Mueble;