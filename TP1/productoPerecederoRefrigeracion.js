//------ IMPORTO LA CLASE PRODUCTO PERECEDERO: ------

var ProductoPerecedero = require("./productoPerecedero.js");


class ProductoPerecederoRefrigeracion extends ProductoPerecedero{

    tipoRefrigeracion;

    constructor(id, nombre, costo, cantidad, fechaCaducidad, tipoRefrigeracion){
        super(id, nombre, costo, cantidad, fechaCaducidad);
        this.tipoRefrigeracion = tipoRefrigeracion;
    }
}

module.exports = ProductoPerecederoRefrigeracion;