const Unidad = require("./unidad");

function Centimetros(id){

    Unidad.call(this, id, "cm");
}

Centimetros.prototype = Object.create(Unidad.prototype); 
Centimetros.prototype.constructor = Centimetros;

Centimetros.prototype.pasajeUnidad = function(unidad, valor){
    
    if ( unidad.nombre == 'mm'){
       
        return valor * 10;
    }

    else if ( unidad.nombre == 'mts'){
        
        return valor / 100;
    }

    else if (unidad.nombre == 'cm'){
        return valor;
    }
}

module.exports = Centimetros;