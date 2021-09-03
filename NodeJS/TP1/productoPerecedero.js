//------ IMPORTO LA CLASE PRODUCTO: ------

var Producto = require("./producto.js");


class ProductoPerecedero extends Producto{

    #fechaCaducidad;

    constructor(id, nombre, costo, cantidad, fechaCaducidad){
        super(id, nombre, costo, cantidad);
        this.#fechaCaducidad = fechaCaducidad;
    }

    get fechaCaducidad(){
        return this.#fechaCaducidad;
    }
}

module.exports = ProductoPerecedero;