class Cuenta{
    #dni;
    nombre;
    apellido;
    #saldoPesos = 0;

    constructor(dni, nombre, apellido){
        this.#dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get dni(){
        return this.#dni;
    }

    get saldoPesos(){
        return this.#saldoPesos;
    }

    depositar(monto){

        if (monto > 0){
            
            this.#saldoPesos += monto; 
        }
        else{
            console.log("Monto invalido!")   
        }
        
    }

    retirar(monto){
        if ( (monto < this.#saldoPesos) && (monto > 0) ){
            
            this.#saldoPesos -= monto;
        }
        else if ( (monto < this.#saldoPesos) && (monto < 0) ){
            console.log("Monto invalido!");
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }
}

class CuentaE extends Cuenta{

    #saldoDolares;
    #saldoEuros;

    constructor(dni, nombre, apellido){
        super(dni, nombre, apellido);
        this.#saldoDolares = 0;
        this.#saldoEuros = 0;
    }

    get saldoDolares (){
        return this.#saldoDolares;
    }

    get saldoEuros(){
        return this.#saldoEuros;
    }

    depositarDolares(monto){

        if (monto > 0){
            
            this.#saldoDolares += monto; 
        }
        else{
            console.log("Monto invalido!")   
        }
        
    }

    depositarEuros(monto){

        if (monto > 0){
            
            this.#saldoEuros += monto; 
        }
        else{
            console.log("Monto invalido!")   
        }
        
    }

    retirarDolares(monto){
        if ( (monto < this.#saldoDolares) && (monto > 0) ){
            
            this.#saldoDolares -= monto;
        }
        else if ( (monto < this.#saldoDolares) && (monto < 0) ){
            console.log("Monto invalido!");
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }

    retirarEuros(monto){
        if ( (monto < this.#saldoEuros) && (monto > 0) ){
            
            this.#saldoEuros -= monto;
        }
        else if ( (monto < this.#saldoEuros) && (monto < 0) ){
            console.log("Monto invalido!");
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }
}

class CuentaVIP extends CuentaE{

    montoPrestamo;

    constructor(dni, nombre, apellido){
        super(dni, nombre, apellido);
        this.montoPrestamo = 0;
    }

    set montoPrestamo(monto){
        if (monto > 0){
            this.montoPrestamo = monto;
        }
        else{
            console.log("Monto invalido!")
        }
    }

}

class Sucursal{

    nombre;
    listaCuentas = [ ];

    constructor (nombre){
        this.nombre = nombre;
    }

    agregarCuenta(cuenta){

        this.listaCuentas.push(cuenta);
    }

    eliminarCuenta(dni){
        
        for (let i = 0; i < this.listaCuentas.length; i++){
            if (this.listaCuentas[i].dni === dni){
                this.listaCuentas.splice(i,1);
            }
        }
    }

    mostrarCuentas(){
        this.listaCuentas.forEach(cuenta => {console.log("Nombre del titular: ", cuenta.nombre, ", ", cuenta.apellido)})
    }

    modificarCuentaMontoPrestamo(dni, montoNuevo){
        for (let i = 0; i < this.listaCuentas.length; i++){
            if (this.listaCuentas[i].dni === dni){
                this.listaCuentas[i].montoPrestamo = montoNuevo;
            }
        }
    }
}

var c = new Cuenta(12123, "Lupita", "Herrera");


console.log(c);
console.log(c.dni);
console.log(c.saldoPesos);
c.depositar(100);
console.log(c.saldoPesos);
c.retirar(50);
console.log(c.saldoPesos);

var ce = new CuentaE(12124,"Habanero","Hernandez");

console.log(ce);
console.log(ce.dni);

var cvip = new CuentaVIP(12125, "Jorge", "Fuentes");

cvip.montoPrestamo = 1245000;

console.log(cvip);
console.log(cvip.saldoPesos);
console.log(cvip.saldoDolares);
console.log(cvip.saldoEuros);

var s = new Sucursal("Pichincha");
s.agregarCuenta(c);
s.agregarCuenta(ce);
s.agregarCuenta(cvip);

console.log(s);

s.eliminarCuenta(12124);

console.log(s);

s.mostrarCuentas();

s.modificarCuentaMontoPrestamo(12125,142);

console.log(cvip);