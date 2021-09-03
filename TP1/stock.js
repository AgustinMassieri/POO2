class Stock{
    
    listaProductosStock = [];

    //Metodo para agregar productos a la lista de productos del Stock
    agregarProducto(producto){

        var detectar  = 0;

        for(let i = 0 ; i < this.listaProductosStock.length ; i++){
            if( this.listaProductosStock[i].id === producto.id ){
                this.listaProductosStock[i].cantidad += producto.cantidad;
                detectar = 1;
            }
        }

        if (detectar === 0){
            this.listaProductosStock.push(producto); 
        }
    } 
    
    //Metodo para imprimir por pantalla la lista de productos del Stock
    mostrarStock(){
        if( this.listaProductosStock.length > 0 ){
            this.listaProductosStock.forEach(producto => {console.log(this.listaProductosStock.indexOf(producto) + 1, ") Producto: ",producto.nombre,"- Cantidad: ", producto.cantidad)})
        }else{
            console.log("Stock vacio!");
        }
    }

    //Metodo para averiguar si un producto esta dentro de la lista de productos del Stock
    existeProductoEnStock(producto){
        for(let i = 0 ; i < this.listaProductosStock.length ; i++){

            if( this.listaProductosStock[i].id === producto.id ){
                return true;
            }
        }
        return false;
    }

    //Metodo para verificar que la cantidad pasada por parametro este disponible en el producto cargado en la lista de producto del Stock
    hayCantidadDisponibleStock(producto, cantidadSolicitada){
        for(let i = 0 ; i < this.listaProductosStock.length ; i++){
            if( this.listaProductosStock[i].id === producto.id ){
                if(this.listaProductosStock[i].cantidad >= cantidadSolicitada){
                    return true;
                }
                else{
                    return false;
                }

            }
        }
        return false;
    }
    
    //Metodo para modificar el precio de un producto que este presente dentro de la lista de productos del Stock
    modificarProducto(producto, precioNuevo){

        if(this.existeProductoEnStock(producto)){
            for(let i = 0 ; i < this.listaProductosStock.length ; i++){
                if( this.listaProductosStock[i].id === producto.id ){
                   producto.costo = precioNuevo;
                }
            }   
        }else{
            console.log("El producto no esta disponible.");
        }
    }

    //Metodo que recibe un producto y disminuye la cantidad solicitada dentro del Stock (sera usada a la hora de pagar)
    actualizarStock(producto){

        var detectar = 0;

        for(let i = 0 ; i < this.listaProductosStock.length ; i++){
            if( this.listaProductosStock[i].id === producto.id ){
                if( this.listaProductosStock[i].cantidad >= producto.cantidad ){
                    
                    this.listaProductosStock[i].cantidad -= producto.cantidad;
                }else{
                    detectar = 1;
                    console.log("La cantidad solicitada no esta en stock, no se pudo concretar la venta!");   
                }                   
            }
        }    

        if (detectar === 0){
            console.log("\nSe realizo el pago del carrito correctamente!");
        }
    }

}

module.exports= Stock;