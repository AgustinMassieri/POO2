//-------------------------------------------------------------------------------------------------------------------------------

function Vehicle(wheeler, type) {
    
    var wheeler = wheeler;
    var type = type;
    
    this.getWheeler = function(){
      return wheeler;
    }

    this.getType = function(){
      return type;
    }

}


Vehicle.prototype.description = function(){
    var mensaje =  "\n> Soy un Vehiculo de tipo: " + this.getType() + " y tengo: " + this.getWheeler() + " ruedas!";
    
    return mensaje;
}

//-------------------------------------------------------------------------------------------------------------------------------


function Monocycle(){
    
    Vehicle.call(this, 1, 'monocycle');
}
   
Monocycle.prototype = Object.create(Vehicle.prototype); 
Monocycle.prototype.constructor = Monocycle;

//-------------------------------------------------------------------------------------------------------------------------------


function Motorcycle(){
    
    Vehicle.call(this, 2, 'motorcycle');
}
   
Motorcycle.prototype = Object.create(Vehicle.prototype); 
Motorcycle.prototype.constructor = Motorcycle;

//-------------------------------------------------------------------------------------------------------------------------------


function Car(){
    
    Vehicle.call(this, 4, 'car');
}
   
Car.prototype = Object.create(Vehicle.prototype); 
Car.prototype.constructor = Car;

//-------------------------------------------------------------------------------------------------------------------------------


function Trailer(){
    
    Vehicle.call(this, 6, 'trailer');
}
   
Trailer.prototype = Object.create(Vehicle.prototype); 
Trailer.prototype.constructor = Trailer;

//-------------------------------------------------------------------------------------------------------------------------------


function VehicleFactory(){

}

VehicleFactory.prototype.createVehicle = function(wheeler){

    if(wheeler === 1) {

        return new Monocycle();
    }

    if(wheeler === 2) {

        return new Motorcycle();
    }    

    if(wheeler === 4) {

        return new Car(); 
    }
            
    if(wheeler === 6) {

        return new Trailer();  
    }

    console.log('Error')

}

//-------------------------------------------------------------------------------------------------------------------------------
   
const factory = new VehicleFactory();
 

const monocycle = factory.createVehicle(1);
console.log(monocycle.description());
  

const motorcycle = factory.createVehicle(2);
console.log(motorcycle.description());
  

const car = factory.createVehicle(4);
console.log(car.description());
 
console.log("\n");