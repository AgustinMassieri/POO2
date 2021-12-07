const Unidad = require("./unidad");

function Milimetros(id){

    Unidad.call(this, id, "mm");
}

Milimetros.prototype = Object.create(Unidad.prototype); 
Milimetros.prototype.constructor = Milimetros;

Milimetros.prototype.pasajeUnidad = function(unidad, valor){
    
    if ( unidad.nombre == 'cm'){
       
        return valor / 10;
    }

    else if ( unidad.nombre == 'mts'){
        
        return valor / 1000;
    }
}

module.exports = Milimetros;