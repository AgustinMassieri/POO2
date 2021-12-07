const Unidad = require("./unidad");

function Metros(id){

    Unidad.call(this, id, "mts");
}

Metros.prototype = Object.create(Unidad.prototype); 
Metros.prototype.constructor = Metros;

Metros.prototype.pasajeUnidad = function(unidad, valor){
    
    if ( unidad.nombre == 'cm'){
       
        return valor * 100;
    }

    else if ( unidad.nombre == 'mm'){
        
        return valor * 1000;
    }
}

module.exports = Metros;