class Producto{
    #id;
    nombre;
    costo;
    cantidad;

    constructor(id, nombre, costo, cantidad){
        this.#id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.cantidad = cantidad;
    }

    get id(){
        return this.#id;
    }
}

module.exports = Producto;