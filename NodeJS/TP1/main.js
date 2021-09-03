
/* 
            |        Programación Orientada a Objetos 2 - U.C.A            |
            |                TP N°1: Carrito de Compras                    |
            |                                                              |
            |  Profesores: Ing. Rusca Jose, Ing. Hernandez Fontes Lennin   |
            |  Alumnos: Velazquez Joaquín, Massieri Agustín                |
*/

//------------------------------- IMPORTO LAS CLASES: --------------------------------------------

var Stock = require("./stock.js");
var Carrito = require("./carrito.js");
var Cliente = require("./cliente.js");
var Producto = require("./producto.js");
var ProductoLineaBlanca = require("./productoLineaBlanca.js");
var ProductoPerecedero = require("./productoPerecedero.js");
var ProductoPerecederoRefrigeracion = require("./productoPerecederoRefrigeracion.js");



//------------------------------------- PROGRAMA: ------------------------------------------------

console.log("\nBienvenidos al Carrito de Compras de Joaquín y Agustín!\n");


//Creo los distintos productos
console.log("\n> Creo los distintos productos...");
pan = new ProductoPerecedero(1, "Pan", 10, 0, new Date(2021, 12, 30));
manteca = new ProductoPerecederoRefrigeracion(2, "Manteca", 2000, 120, new Date(2021, 10, 29), "Heladera");
helado = new ProductoPerecederoRefrigeracion(3, "Helado", 400, 500, new Date(2021, 10, 15), "Freezer");
lavarropas = new ProductoLineaBlanca(4, "Lavarropas", 500, 10, 3.5, 4, 6);


//Imprimo los distintos productos creados
console.log("\n> Imprimo los distintos productos creados:\n");
console.log("Pan: ", pan, "\n");
console.log("Manteca: ", manteca, "\n");
console.log("Helado: ", helado, "\n");
console.log("Lavarropas: ", lavarropas, "\n");


//Creo el stock
console.log("\n> Creo el stock...");
stock = new Stock();
console.log(stock);

//Agrego productos al stock
console.log("\n> Agrego productos al stock...");
stock.agregarProducto(pan);
stock.agregarProducto(lavarropas);


//Muestro el stock
console.log("\n-- Muestro el stock: --");
stock.mostrarStock();


//Sin haber agregado el 'Helado', pregunto si esta en el Stock
console.log("\n> ¿Está el 'Helado' en la lista del Stock? ", stock.existeProductoEnStock(helado));


//Habiendo agregado el 'Pan', pregunto si esta en el Stock
console.log("\n> ¿Está el 'Pan' en la lista del Stock? ", stock.existeProductoEnStock(pan));


//Consulto precio del pan
console.log("\n\n> Precio del pan: $", pan.costo);


//Modifico el precio del pan
console.log("\n> Modifico el precio del pan...");
stock.modificarProducto(pan, 12);


//Muestro el nuevo precio del pan
console.log("\n> Precio del pan (luego de la modificacion): $", stock.listaProductosStock[0].costo);


//Creo a el cliente 'Jose'
console.log("\n> Creo a el cliente 'Jose'");
jose = new Cliente('Jose', 123456789, new Carrito());
console.log("\n", jose);


//Creo a el cliente 'Lennin'
console.log("\n> Creo a el cliente 'Lennin'");
lennin = new Cliente('Lennin', 987654321, new Carrito());
console.log("\n", lennin);


//Agrego un elemento del cual no hay stock al carrito de 'Jose'
console.log("\n\n> Intento agregar un producto al carrito de 'Jose', el cual no esta en el stock:");
jose.carrito.agregarProductoAlCarrito(helado, 5, stock);


//Intento agregar un producto al carrito de 'Jose', del cual no hay cantidad disponible:
console.log("\n> Intento agregar un producto al carrito de 'Jose' del cual no hay cantidad disponible:");
jose.carrito.agregarProductoAlCarrito(pan, 1, stock);


//Agrego al carrito de 'Jose', 2 Lavarropas (estando el Carrito vacio):
console.log("\n> Agrego al carrito de 'Jose' 2 Lavarropas (estando el Carrito vacio):");
jose.carrito.agregarProductoAlCarrito(new ProductoLineaBlanca(4, "Lavarropas", 500, 2, 3.5, 4, 6), 2, stock);


//Agrego al carrito de 'Jose', 3 Lavarropas más (el producto ya estaba en el Carrito):
console.log("\n> Agrego al carrito de 'Jose' 3 Lavarropas más (el producto ya estaba en el Carrito):");
jose.carrito.agregarProductoAlCarrito(new ProductoLineaBlanca(4, "Lavarropas", 500, 3, 3.5, 4, 6), 3, stock);


//Agrego al carrito de 'Jose', 100 Lavarropas más (el producto ya estaba en el Carrito y no me va a alcanzar el stock):
//La idea de esta verificacion es ir más alla de la realizada anteriormente.
//En la primera verificacion, nos fijamos si la cantidad que se deseaba agregar existia en el stock
//Pero en esta, le estamos agregango la verificacion para el caso en el que como ya existia el producto, no solo habria que ver que haya stock para la ...
//...cantidad solicitada en esta adiccio, sino que tambien deberia haber para la suma total de las cantidades solicitadas
console.log("\n> Agrego al carrito de 'Jose' 100 Lavarropas más (el producto ya estaba en el Carrito y no me va a alcanzar el stock):");
jose.carrito.agregarProductoAlCarrito(new ProductoLineaBlanca(4, "Lavarropas", 500, 100, 3.5, 4, 6), 6, stock);


//Muestro el carrito de 'Jose'
console.log("\n-- Muestro el carrito de 'Jose': --");
jose.carrito.mostrarCarrito();


//Voy a eliminar 2 'Lavarropas' de la lista de productos del carrito de 'Jose'
console.log("\n> Voy a eliminar 2 'Lavarropas' de la lista de productos del carrito ");
jose.carrito.quitarProducto(lavarropas, 2);


console.log("\n-- Muestro el carrito de 'Jose': --");
jose.carrito.mostrarCarrito();


//Voy a agregar 10 Lavarropas en el carrito de 'Lennin'
//La idea es que verifiquemos que sucede ya que 'Jose' pagara los 3 Lavarropas que tiene en su carrito por lo que cuando ...
//... 'Lennin' quiera pagar sus 10 Lavarropas, le deberia saltar la alerta de que ya no quedo suficiente Stock
console.log("\n> Voy a agregar 10 Lavarropas en el carrito de 'Lennin' ");
lennin.carrito.agregarProductoAlCarrito(new ProductoLineaBlanca(4, "Lavarropas", 500, 10, 3.5, 4, 10), 10, stock);


//Muestro el carrito de 'Lennin'
console.log("\n-- Muestro el carrito de 'Lennin': --");
lennin.carrito.mostrarCarrito();


//Ahora vamos a pagar lo que hay en el carrito de 'Jose'. Por ende, al realizar el pago, disminuira el Stock disponible
//Durante este proceso, el Stock nunca se vio afectado, tan solo fuimos validando que lo que se agregara al carrito estuviera disponible en el Stock
console.log("\n> 'Jose' paga los items que tenia en su carrito:")
jose.carrito.pagar(stock);


//Como ya pagamos, voy a vaciar el carrito de 'Jose' y mostrarlo:
jose.carrito.vaciarCarrito();
console.log("\n-- Muestro el carrito de 'Jose': --");
jose.carrito.mostrarCarrito();


//Muestro el stock luego de haber pagado el carrito de 'Jose'
console.log("\n> Muestro el stock luego de haber pagado el carrito:");
stock.mostrarStock();


//Ahora que 'Jose' ya pago y la cantidad del Stock disminuyo, pero 'Lennin' aun tiene 10 Lavarropas en su carrito ...
//..., vamos a intentar pagar el carrito de 'Lennin' y ver el error que nos lanza
console.log("\n> 'Lennin' paga los items que tenia en su carrito:");
lennin.carrito.pagar(stock);


console.log("\n");