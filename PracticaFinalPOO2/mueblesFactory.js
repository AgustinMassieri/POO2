const Mesa = require("./mesa");
const Silla = require("./silla");
const Escritorio = require("./escritorio");
const Armario = require("./armario");
const MesaRatona = require("./mesaRatona");
const MesaPingPong = require("./mesaPingPong");

function MueblesFactory(){
    
    this.contador_id = 0;
}

MueblesFactory.prototype.descripcion = function(){
    return "Soy la MueblesFactory!";
}

MueblesFactory.prototype.crearMueble = function(nombre){

    switch(nombre){

        case "Armario":
            this.contador_id += 1;
            return new Armario(this.contador_id);

        case "Mesa":
            this.contador_id += 1;
            return new Mesa(this.contador_id);

        case "Mesa PingPong":
            this.contador_id += 1;
            return new MesaPingPong(this.contador_id);
            
        case "Mesa Ratona":
            this.contador_id += 1;
            return new MesaRatona(this.contador_id);

        case "Silla":
            this.contador_id += 1;
            return new Silla(this.contador_id);

        case "Escritorio":
            this.contador_id += 1;
            return new Escritorio(this.contador_id);
        
        default:
            console.log("No se encontro el Mueble solicitaco!");
    }
}

module.exports = MueblesFactory;