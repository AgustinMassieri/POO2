const MueblesFactory = require("./mueblesFactory");
const VajillaFactory = require("./vajillaFactory");

mueblesFactory = new MueblesFactory();
console.log(mueblesFactory.descripcion());

vajillaFactory = new VajillaFactory();
console.log(vajillaFactory.descripcion());

mueble1 = mueblesFactory.crearMueble("Mesa");
mueble2 = mueblesFactory.crearMueble("Silla");
mueble3 = mueblesFactory.crearMueble("Mesa PingPong");
mueble4 = mueblesFactory.crearMueble("Armario");
mueble5 = mueblesFactory.crearMueble("Mesa Ratona");

const listaDeMuebles = [mueble1, mueble2, mueble3, mueble4, mueble5];

listaDeMuebles.forEach( mueble => {
    console.log(mueble, "\n");
});
