const Mueble = require("./mueble");
const Dimensiones = require("./dimensiones");

function Mesa(id){
    
    Mueble.call(this, "Mesa", new Dimensiones(10, 10, 10), "Blanco", 2000, id);
}

Mesa.prototype = Object.create(Mueble.prototype); 
Mesa.prototype.constructor = Mesa;

module.exports = Mesa;