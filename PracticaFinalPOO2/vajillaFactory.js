const Taza = require("./taza");
const Plato = require("./plato");
const Vaso = require("./vaso");

function VajillaFactory(){
    
    this.contador_id = 0;
}

VajillaFactory.prototype.descripcion = function(){
    
    return "Soy la VajillaFactory!";
}

VajillaFactory.prototype.crearVajilla = function(nombre){

    switch(nombre){

        case "Vaso":
            this.contador_id += 1;
            return new Vaso(this.contador_id);

        case "Plato":
            this.contador_id += 1;
            return new Plato(this.contador_id);
        
        case "Taza":
            this.contador_id += 1;
            return new Taza(this.contador_id);
        
        default:
            console.log("No se encontro la vajilla solicitada!");
    }
}

module.exports = VajillaFactory;