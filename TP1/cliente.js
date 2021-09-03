class Cliente{
    nombre;
    #dni;
    carrito;
    
    constructor(nombre, dni, carrito){
        this.nombre = nombre;
        this.#dni = dni;
        this.carrito = carrito;
    }

    get dni(){
        return this.#dni;
    }
        
}

module.exports = Cliente;