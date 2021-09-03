class Carrito{

    listaProductosCarrito = [];

    //Metodo para agregar un producto junto con la cantidad del mismo al carrito.
    //A su vez pasamos por parametro al Stock para verificar que haya Stock disponible del mismo.
    agregarProductoAlCarrito(producto, cantidad, stock){
        var detectar  = 0;

        if( stock.existeProductoEnStock(producto) === true ){

            if( stock.hayCantidadDisponibleStock(producto, cantidad) === true ){

                for(let i = 0 ; i < this.listaProductosCarrito.length ; i++){
                    if( this.listaProductosCarrito[i].id === producto.id ){
                        if(stock.hayCantidadDisponibleStock(producto, (cantidad + this.listaProductosCarrito[i].cantidad) ) === true){
                            this.listaProductosCarrito[i].cantidad += cantidad;
                            detectar = 1;
                            console.log("Se agregaron ", cantidad, producto.nombre, "más! Ahora hay una cantidad total de", producto.nombre, "=", this.listaProductosCarrito[i].cantidad);
                        }else{
                            detectar = 1;
                            console.log("Teniendo en cuenta que ya habia en el carrito una cantidad =", this.listaProductosCarrito[i].cantidad, "no hay Stock suficiente para agregar la cantidad solicitada de", producto.nombre);
                        }
                    }
                }
        
                if (detectar === 0){
                    this.listaProductosCarrito.push(producto); 
                    console.log("Se agrego una cantidad =", cantidad, "de", producto.nombre);
                }

            }else{
                console.log("\nNo hay cantidad disponible del producto: ", producto.nombre," en Stock!\n");
            }    
            
        }else{
            console.log("\nNo existe el producto: ", producto.nombre," en la lista de productos del Stock!\n");
        }

    }
    
    //Metodo para verificar si un producto se encuentra dentro de la lista de productos del Carrito
    existeProductoEnCarrito(producto){
        for(let i = 0 ; i < this.listaProductosCarrito.length ; i++){

            if( this.listaProductosCarrito[i].id === producto.id ){
                return true;
            }
        }
        return false;
    }

    //Metodo para verificar si una cantidad solicitada de un producto se encuentra dentro de la lista de productos del Carrito
    hayCantidadDisponibleCarrito(producto, cantidadSolicitada){
        for(let i = 0 ; i < this.listaProductosCarrito.length ; i++){
            if( this.listaProductosCarrito[i].id === producto.id ){
                if(this.listaProductosCarrito[i].cantidad >= cantidadSolicitada){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        return false;
    }
    
    //Metodo para imprimir por pantalla la lista de productos del Carrito
    mostrarCarrito(){
        if( this.listaProductosCarrito.length > 0 ){
            this.listaProductosCarrito.forEach(producto => {console.log(this.listaProductosCarrito.indexOf(producto) + 1, ") Producto: ",producto.nombre,"- Cantidad: ", producto.cantidad)})
        }else{
            console.log("Carrito vacio!");
        }
    }

    //Metodo para eliminar una cantidad de cierto producto de la lista de productos del Carrito
    quitarProducto(producto, cantidad){

        if (cantidad > 0){
            if (this.existeProductoEnCarrito(producto) === true){
                if (this.hayCantidadDisponibleCarrito(producto,cantidad) === true){
                    for (let i = 0; i < this.listaProductosCarrito.length; i++){
                        if (this.listaProductosCarrito[i].id === producto.id){
                            this.listaProductosCarrito[i].cantidad -= cantidad;
                        }
                    }
                }else{
                    console.log("La cantidad solicitada supera a la que se encuentra disponible de quitar!");
                }
            
            }else{
                console.log("No existe se encontro el producto dentro de la lista de productos del carrito!");
            }

        }else{
            console.log("La cantidad ingresada no es valida");
        }
    }

    //Metodo para pagar las cantidades de los productos que estan dentro de la lista de productos del Carrito
    pagar(stock){
        
        if( this.listaProductosCarrito.length > 0 ){
            this.listaProductosCarrito.forEach(producto => {
                
                stock.actualizarStock(producto);
            })

        }else{
            console.log("Carrito vacio!");
        }
    }

    //Metodo para eliminir todos los productos de la lista de productos del Carrito
    vaciarCarrito(){

        this.listaProductosCarrito.splice(0, this.listaProductosCarrito.length);
    }
}

module.exports = Carrito;