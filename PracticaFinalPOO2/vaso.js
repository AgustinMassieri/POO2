const Vajilla = require("./vajilla");

function Vaso(id){

    Vajilla.call(this, "Vaso", 20, id);
}

Vaso.prototype = Object.create(Vajilla.prototype); 
Vaso.prototype.constructor = Vaso;

module.exports = Vaso;