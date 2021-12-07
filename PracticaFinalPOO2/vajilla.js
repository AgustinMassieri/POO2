function Vajilla(nombre, precio, id){

    var id = id;

    this.nombre = nombre;
    this.precio = precio;

    this.obtenerId = function(){
        return id;
    }
}

Vajilla.prototype.descripcion = function(){
    
    return "Vajilla: Nombre = ", this.nombre, " - Precio = ", this.precio;
}

module.exports = Vajilla;