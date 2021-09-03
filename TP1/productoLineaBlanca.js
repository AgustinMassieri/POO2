//------ IMPORTO LA CLASE PRODUCTO: ------

var Producto = require("./producto.js");


class ProductoLineaBlanca extends Producto{

    #largo;
    #ancho;
    #profundidad;

    constructor(id, nombre, costo, cantidad, largo, ancho, profundidad){
        super(id, nombre, costo, cantidad);
        this.#largo = largo;
        this.#ancho = ancho;
        this.#profundidad = profundidad;
    }

    get largo(){
        return this.#largo;
    }
    
    get ancho(){
        return this.#ancho;
    }
    
    get profundidad(){
        return this.#profundidad;
    }
}

module.exports = ProductoLineaBlanca;