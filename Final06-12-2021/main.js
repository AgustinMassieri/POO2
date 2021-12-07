const FigurasFactory = require("./factoryFiguras");
const UnidadesFactory = require("./factoryUnidades");

var fabricaDeUnidades = new UnidadesFactory(); ////Creo una Fabrica de Unidades para organizar mejor el codigo (Factory Method)
var fabricaDeFiguras = new FigurasFactory(); //Creo una Fabrica de Figuras para organizar mejor el codigo (Factory Method)

var centimetros = fabricaDeUnidades.crearUnidad("centimetros");
var metros = fabricaDeUnidades.crearUnidad("metros");
var milimetros = fabricaDeUnidades.crearUnidad("milimetros");


var figura1 = fabricaDeFiguras.crearFigura("Cuadrado", centimetros);
var figura2 = fabricaDeFiguras.crearFigura("Circulo", metros);
var figura3 = fabricaDeFiguras.crearFigura("Rectangulo", milimetros);
var figura4 = fabricaDeFiguras.crearFigura("Triangulo", centimetros); //Pruebo crear una figura que no existe en la fabrica

var listaDeFiguras = [figura1, figura2, figura3];

listaDeFiguras.forEach( figura => {
    console.log("\n> ", figura.descripcion()); //Muestro la descripcion de la figura
    console.log("\t> Perimetro = ", figura.calcularPerimetro(), " - Area = ", figura.calcularArea()); //Calculo el perimtro y el area de cada figura
    figura.mostrarValores(centimetros);
})



console.log("\n");