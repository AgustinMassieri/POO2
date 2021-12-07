const Vajilla = require("./vajilla");

function Plato(id){

    Vajilla.call(this, "Plato", 20, id);
}

Plato.prototype = Object.create(Vajilla.prototype); 
Plato.prototype.constructor = Plato;

module.exports = Plato;