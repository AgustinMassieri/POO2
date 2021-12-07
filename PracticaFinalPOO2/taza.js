const Vajilla = require("./vajilla");

function Taza(id){

    Vajilla.call(this, "Taza", 30, id);
}

Taza.prototype = Object.create(Vajilla.prototype); 
Taza.prototype.constructor = Taza;

module.exports = Taza;