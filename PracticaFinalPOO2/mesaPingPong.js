const Mesa = require("./mesa");
const Dimensiones = require("./dimensiones");

function MesaPingPong(id){
    
    Mesa.call(this, id);
    
    this.nombre = "Mesa Ping-Pong";
    this.dimensiones = new Dimensiones(100, 100, 50);
    this.color = "Azul";
    this.precio = 200000;
}

MesaPingPong.prototype = Object.create(Mesa.prototype); 
MesaPingPong.prototype.constructor = MesaPingPong;

module.exports = MesaPingPong;