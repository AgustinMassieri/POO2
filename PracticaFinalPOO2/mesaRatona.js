const Mesa = require("./mesa");
const Dimensiones = require("./dimensiones");

function MesaRatona(id){
    
    Mesa.call(this, id);
    
    this.nombre = "Mesa Ratona";
    this.dimensiones = new Dimensiones(30, 40, 20);
    this.color = "Marron oscuro";
    this.precio = 40500;
}

MesaRatona.prototype = Object.create(Mesa.prototype); 
MesaRatona.prototype.constructor = MesaRatona;

module.exports = MesaRatona;