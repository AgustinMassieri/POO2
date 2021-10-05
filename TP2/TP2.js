function Cliente(nombre, dni, carrito){
    this.nombre = nombre;
    var dni = dni;
    this.carrito = carrito;
    
    this.obtenerDNI = function(){
        return dni;
    }
}

Cliente.prototype.mostrar = function(){
    console.log("> Nombre: " + this.nombre + " - D.N.I: " + this.obtenerDNI() + " - Carrito: ");  
    this.carrito.mostrar()
    console.log("\n");

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Carrito(listaDeProductosCarrito){

    this.listaDeProductosCarrito = listaDeProductosCarrito;
}

Carrito.prototype.mostrar = function(){

    if( this.listaDeProductosCarrito.length > 0 ){

        for( let i = 0; i < this.listaDeProductosCarrito.length; i++){
            console.log("\t", i + 1, ") Producto:", this.listaDeProductosCarrito[i].nombre,"- Cantidad:", this.listaDeProductosCarrito[i].cantidad, "- Precio:", this.listaDeProductosCarrito[i].costo);
        }

    }else{
        console.log("\tCarrito vacio!");
    }
}

Carrito.prototype.agregarProductoAlCarrito = function(producto, cantidad, stock){
    var detectar  = 0;

    if( stock.existeProductoEnStock(producto) === true ){

        if( stock.hayCantidadDisponibleStock(producto, cantidad) === true ){

            for(let i = 0 ; i < this.listaDeProductosCarrito.length ; i++){
                if( this.listaDeProductosCarrito[i].obtenerId() === producto.obtenerId() ){
                    if(stock.hayCantidadDisponibleStock(producto, (cantidad + this.listaDeProductosCarrito[i].cantidad) ) === true){
                        this.listaDeProductosCarrito[i].cantidad += cantidad;
                        detectar = 1;
                        console.log("Se agregaron ", cantidad, producto.nombre, "más! Ahora hay una cantidad total de", producto.nombre, "=", this.listaDeProductosCarrito[i].cantidad);
                    }else{
                        detectar = 1;
                        console.log("Teniendo en cuenta que ya habia en el carrito una cantidad =", this.listaDeProductosCarrito[i].cantidad, "no hay Stock suficiente para agregar la cantidad solicitada de", producto.nombre);
                    }
                }
            }
    
            if (detectar === 0){
                this.listaDeProductosCarrito.push(producto); 
                console.log("Se agrego una cantidad =", cantidad, "de", producto.nombre, "\n");
            }

        }else{
            console.log("\nNo hay cantidad disponible del producto: ", producto.nombre," en Stock!\n");
        }    
        
    }else{
        console.log("\nNo existe el producto: ", producto.nombre," en la lista de productos del Stock!\n");
    }

}

Carrito.prototype.existeProductoEnCarrito = function(producto){
    
    for(let i = 0 ; i < this.listaDeProductosCarrito.length ; i++){
            
        if( this.listaDeProductosCarrito[i].obtenerId() === producto.obtenerId() ){
            return true;
           }
        }
    return false;
 
}

Carrito.prototype.hayCantidadDisponibleCarrito = function(producto, cantidadSolicitada){
    for(let i = 0 ; i < this.listaDeProductosCarrito.length ; i++){
        if( this.listaDeProductosCarrito[i].obtenerId() === producto.obtenerId() ){
            if(this.listaDeProductosCarrito[i].cantidad >= cantidadSolicitada){
                return true;
            }
            else{
                return false;
            }
        }
    }
    return false;
}

Carrito.prototype.quitarProducto = function(producto, cantidad){

    if (cantidad > 0){
        if (this.existeProductoEnCarrito(producto) === true){
            if (this.hayCantidadDisponibleCarrito(producto,cantidad) === true){
                for (let i = 0; i < this.listaDeProductosCarrito.length; i++){
                    if (this.listaDeProductosCarrito[i].id === producto.id){
                        this.listaDeProductosCarrito[i].cantidad -= cantidad;
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

Carrito.prototype.pagar = function(stock){

    if( this.listaDeProductosCarrito.length > 0 ){
    
        for(let i = 0 ; i < this.listaDeProductosCarrito.length ; i++){
           var j = stock.actualizarStock(this.listaDeProductosCarrito[i]);
        }
        
        if (j != 1){
            this.vaciarCarrito();
        }


    }else{
        console.log("Carrito vacio!");
    }
}

Carrito.prototype.vaciarCarrito = function(){

    this.listaDeProductosCarrito.splice(0, this.listaDeProductosCarrito.length);

}



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Stock(listaDeProductosStock){

    this.listaDeProductosStock = listaDeProductosStock;
}

Stock.prototype.mostrar = function(){

    if( this.listaDeProductosStock.length > 0 ){

        for( let i = 0; i < this.listaDeProductosStock.length; i++){
            console.log(i + 1, ") Producto:", this.listaDeProductosStock[i].nombre,"- Cantidad:", this.listaDeProductosStock[i].cantidad, "- Precio:", this.listaDeProductosStock[i].costo);
        }

    }else{
        console.log("Stock vacio!");
    }
}

Stock.prototype.agregarProducto = function(producto){
    
    var detectar  = 0;

    for(let i = 0 ; i < this.listaDeProductosStock.length ; i++){
        if( this.listaDeProductosStock[i].obtenerId() === producto.obtenerId() ){
            this.listaDeProductosStock[i].cantidad += producto.cantidad;
            detectar = 1;
        }
    }

    if (detectar === 0){
        this.listaDeProductosStock.push(producto); 
    }
}

Stock.prototype.existeProductoEnStock = function(producto){

    for(let i = 0 ; i < this.listaDeProductosStock.length ; i++){

        if( this.listaDeProductosStock[i].obtenerId() === producto.obtenerId() ){
            return true;
        }
    }
    return false;
}

Stock.prototype.hayCantidadDisponibleStock = function(producto, cantidadSolicitada){

    for(let i = 0 ; i < this.listaDeProductosStock.length ; i++){
        if( this.listaDeProductosStock[i].obtenerId() === producto.obtenerId() ){
            if(this.listaDeProductosStock[i].cantidad >= cantidadSolicitada){
                return true;
            }
            else{
                return false;
            }

        }
    }
    return false;
}

Stock.prototype.modificarProducto = function(producto, precioNuevo){

    if(this.existeProductoEnStock(producto)){
        for(let i = 0 ; i < this.listaDeProductosStock.length ; i++){
            if( this.listaDeProductosStock[i].obtenerId() === producto.obtenerId() ){
               producto.costo = precioNuevo;
            }
        }   
    }else{
        console.log("El producto no esta en el Stock!");
    }
}

Stock.prototype.actualizarStock = function(producto){  //HAY QUE PROBARLA PORQUE TODAVIA NO ARME LAS FUNCIONES DEL CARRITO

    var detectar = 0;

    for(let i = 0 ; i < this.listaDeProductosStock.length ; i++){
        if( this.listaDeProductosStock[i].obtenerId() === producto.obtenerId() ){
            if( this.listaDeProductosStock[i].cantidad >= producto.cantidad ){
                
                this.listaDeProductosStock[i].cantidad -= producto.cantidad;
                
            }else{
                detectar = 1;
                console.log("La cantidad solicitada no esta en stock, no se pudo concretar la venta!");   
            }                   
        }
    }    

    if (detectar === 0){
        console.log("\nSe realizo el pago de:", producto.nombre, "- Cantidad:", producto.cantidad, "correctamente!");
        return 0;
    }

    else{
        return 1;
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Producto(id, nombre, costo, cantidad){

    var id = id;
    this.nombre = nombre;
    this.costo = costo;
    this.cantidad = cantidad;

    this.obtenerId = function(){
        return id;
    }
}

Producto.prototype.mostrar = function(){
    var mensaje = "> ID: " + this.obtenerId() + " - Nombre: " + this.nombre + " - Costo: $" + this.costo + " - Cantidad: " + this.cantidad + "\n";

    return mensaje;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function ProductoPerecedero(id, nombre, costo, cantidad, fechaDeCaducidad){

    Producto.call(this, id, nombre, costo, cantidad);
    var fechaDeCaducidad = fechaDeCaducidad.toLocaleDateString();

    this.obtenerFechaDeCaducidad = function() {
        return fechaDeCaducidad;
    }
}

ProductoPerecedero.prototype = Object.create(Producto.prototype); //ProductoPerecedero esta heredando de Producto
ProductoPerecedero.prototype.constructor = ProductoPerecedero;

ProductoPerecedero.prototype.mostrar = function(){
    var mensaje =  "> ID: " + this.obtenerId() + " - Nombre: " + this.nombre + " - Costo: $" + this.costo + " - Cantidad: " + this.cantidad + " - Fecha De Caducidad: " + this.obtenerFechaDeCaducidad() + "\n";

    return mensaje;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function ProductoPerecederoRefrigeracion(id, nombre, costo, cantidad, fechaDeCaducidad, tipoDeRefrigeracion){

    ProductoPerecedero.call(this, id, nombre, costo, cantidad, fechaDeCaducidad);
    this.tipoDeRefrigeracion = tipoDeRefrigeracion;
}

ProductoPerecederoRefrigeracion.prototype = Object.create(ProductoPerecedero.prototype);
ProductoPerecederoRefrigeracion.prototype.constructor = ProductoPerecederoRefrigeracion;

ProductoPerecederoRefrigeracion.prototype.mostrar = function(){
    var mensaje = "> ID: " + this.obtenerId() + " - Nombre: " + this.nombre + " - Costo: $" + this.costo + " - Cantidad: " + this.cantidad + " - Fecha De Caducidad: " + this.obtenerFechaDeCaducidad() + " - Tipo de Refrigeracion: " + this.tipoDeRefrigeracion + "\n";

    return mensaje;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function ProductoLineaBlanca(id, nombre, costo, cantidad, largo, ancho, profundidad){
    Producto.call(this, id, nombre, costo, cantidad);

    var largo = largo;
    var ancho = ancho;
    var profundidad = profundidad;

    this.obtenerLargo = function(){
        return largo;
    }

    this.obtenerAncho = function(){
        return ancho;
    }

    this.obtenerProfundidad = function(){
        return profundidad;
    }
}

ProductoLineaBlanca.prototype = Object.create(Producto.prototype);
ProductoLineaBlanca.prototype.constructor = ProductoLineaBlanca;

ProductoLineaBlanca.prototype.mostrar = function(){
    var mensaje = "> ID: " + this.obtenerId() + " - Nombre: " + this.nombre + " - Costo: $" + this.costo + " - Cantidad: " + this.cantidad + " - Largo: " + this.obtenerLargo() + " - Ancho: " + this.obtenerAncho() + " - Profundidad: " + this.obtenerProfundidad() + "\n";

    return mensaje;
}



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log("\n----------------- BIENVENIDOS AL CARRITO DE COMPRAS DE JOAQUIN Y AGUSTIN [CON PROTOTIPOS] ---------------------\n");


console.log("-- CREO Y MUESTRO LOS PRODUCTOS: \n");

var vaso = new Producto(1, "Vaso", 10, 200);
var pan = new ProductoPerecedero(2, "Pan", 100, 300, new Date());
var carne = new ProductoPerecederoRefrigeracion(3, "Carne", 200, 15, new Date(), "Freezer");
var lavarropas = new ProductoLineaBlanca(4, "Lavarropas", 30000, 50, 60, 60, 60);

console.log(vaso.mostrar());
console.log(pan.mostrar());
console.log(carne.mostrar());
console.log(lavarropas.mostrar());


console.log("\n-- CREO Y MUESTRO EL STOCK: \n");

var stock = new Stock([]);

stock.mostrar();


console.log("\n\n-- AGREGO LOS LAVARROPAS AL STOCK Y MUESTRO EL STOCK\n");

stock.agregarProducto(lavarropas);
stock.mostrar();


console.log("\n\n-- AGREGO MAS LAVARROPAS Y MUESTRO EL STOCK\n");

stock.agregarProducto(lavarropas);
stock.mostrar();


console.log("\n\n-- PREGUNTO SI EXISTE EL PRODUCTO 'LAVARROPAS' EN EL STOCK\n");

console.log(stock.existeProductoEnStock(lavarropas));


console.log("\n\n-- PREGUNTO SI EXISTE EL PRODUCTO 'PAN' EN EL STOCK\n");

console.log(stock.existeProductoEnStock(pan));


console.log("\n\n-- PREGUNTO SI EXISTEN 100 'LAVARROPAS' EN EL STOCK\n");

console.log(stock.hayCantidadDisponibleStock(lavarropas, 100));


console.log("\n\n-- PREGUNTO SI EXISTEN 300 'LAVARROPAS' EN EL STOCK\n");

console.log(stock.hayCantidadDisponibleStock(lavarropas, 300));


console.log("\n\n-- LE CAMBIO EL PRECIO A LOS 'LAVARROPAS' DE $30000 A $100000 Y MUESTRO EL STOCK\n");

stock.modificarProducto(lavarropas, 100000);
stock.mostrar();

console.log("\n\n-- LE INTENTO CAMBIAR EL PRECIO A EL 'PAN' QUE NO ESTA EN EL STOCK\n");

stock.modificarProducto(pan, 100000);

console.log("\n\n-- CREO Y MUESTRO LOS CLIENTES: \n");

var jose = new Cliente("Jose", 123456789, new Carrito([]));
var lennin = new Cliente("Lennin", 987654321, new Carrito([]));

jose.mostrar();
lennin.mostrar();


console.log("-- AGREGO 30 'LAVARROPAS' AL CARRITO DE JOSE Y LO MUESTRO: \n");

jose.carrito.agregarProductoAlCarrito(new ProductoLineaBlanca(4, "Lavarropas", 30000, 30, 60, 60, 60), 30, stock);
jose.mostrar();


console.log("\n\n-- AGREGO LA 'CARNE' AL STOCK Y MUESTRO EL STOCK\n");

stock.agregarProducto(carne);
stock.mostrar();


console.log("\n\n-- AGREGO 2 'CARNE' AL CARRITO DE LENNIN Y LO MUESTRO: \n");

lennin.carrito.agregarProductoAlCarrito(new ProductoPerecederoRefrigeracion(3, "Carne", 200, 2, new Date(), "Freezer"), 2, stock);
lennin.mostrar();

console.log("\n\n-- AGREGO 80 'LAVARROPAS' AL CARRITO DE LENNIN Y LO MUESTRO: \n");

lennin.carrito.agregarProductoAlCarrito(new ProductoLineaBlanca(4, "Lavarropas", 30000, 80, 60, 60, 60), 80, stock);
lennin.mostrar();


console.log("\n\nMUESTRO EL STOCK PARA VER QUE LAS CANTIDADES NO SE HAYAN MODIFICADO YA QUE AUN NO PAGUE Y NO DEBERIAN HABER DISMINUIDO: \n");
stock.mostrar();


console.log("\n\n-- LENNIN PAGA SU CARRITO DE COMPRAS, POR LO QUE SE DISMINUYE EL STOCK");
lennin.carrito.pagar(stock);
console.log("\n");
lennin.carrito.mostrar();


console.log("\n\n-- VEMOS EL STOCK ACTUALIZADO");
stock.mostrar();

console.log("\n\n-- JOSE INTENTA PAGAR SU ORDEN DE LAVARROPAS PERO NO HAY STOCK PORQUE LENNIN YA CONCRETO EL PAGO\n");
jose.carrito.pagar(stock);


console.log("\n\n-- EL CARRITO DE JOSE SIGUE INTACTO PORQUE LA COMPRA NO SE PUDO REALIZAR");
jose.carrito.mostrar();

console.log("\n");