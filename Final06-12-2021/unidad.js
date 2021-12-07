function Unidad(id, nombre){
    
    var id = id;
    this.nombre = nombre;

    this.obtenerId = function(){
        return id;
    }

}

Unidad.prototype.pasajeUnidad = function(unidad, valor){

}

module.exports = Unidad;