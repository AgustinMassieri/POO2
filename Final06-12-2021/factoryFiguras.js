const Circulo = require("./circulo");
const Cuadrado = require("./cuadrado");
const Rectangulo = require("./rectangulo");

function FigurasFactory(){
    
    this.contador_id = 0;
}

FigurasFactory.prototype.descripcion = function(){
    return "Soy la FigurasFactory!";
}

FigurasFactory.prototype.crearFigura = function(nombre, unidad){

    switch(nombre){

        case "Cuadrado":
            this.contador_id += 1;
            return new Cuadrado(this.contador_id, unidad, 10);

        case "Circulo":
            this.contador_id += 1;
            return new Circulo(this.contador_id, unidad, 100);

        case "Rectangulo":
            this.contador_id += 1;
            return new Rectangulo(this.contador_id, unidad, 200, 100);
                
        default:
            console.log("No se encontro la Figura solicitada!");
    }
}

module.exports = FigurasFactory;