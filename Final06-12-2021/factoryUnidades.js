const Centimetros = require("./centimetros");
const Metros = require("./metros");
const Milimetros = require("./milimetros");

function UnidadesFactory(){
    
    this.contador_id = 0;
}

UnidadesFactory.prototype.descripcion = function(){
    return "Soy la UnidadesFactory!";
}

UnidadesFactory.prototype.crearUnidad = function(nombre){

    switch(nombre){

        case "centimetros":
            this.contador_id += 1;
            return new Centimetros(this.contador_id);

        case "milimetros":
            this.contador_id += 1;
            return new Milimetros(this.contador_id);

        case "metros":
            this.contador_id += 1;
            return new Metros(this.contador_id);
                
        default:
            console.log("No se encontro la Unidad solicitada!");
    }
}

module.exports = UnidadesFactory;