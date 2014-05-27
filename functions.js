
function driving(){

var dist;
var madeIt;

var car = {
	wheels: 4,
	fuel: 15,
	mpg: 32,
	odometer: 0,
	drive: function (miles){
		var fuelNeeded = miles / this.mpg;
		if (this.fuel < fuelNeeded){
			this.odometer += this.fuel * this.mpg;
			this.fuel = 0;
			return false;
		} else {
			this.fuel = this.fuel - fuelNeeded;
				this.odometer += miles;
				return true;
		}
	}
};

car.hasFuel = function (){
	if (this.fuel > 0 ){
		return true;
	}
	else{
		return false;
	}
}
dist = parseInt(prompt ('How far do you want to travel?'));
while (dist > 0){
	madeIt =  car.drive(dist);
	if (madeIt){ alert('you have ' + car.fuel + 'gal remaining.');}
	else {alert('you ran out of fuel!');}
	dist = parseInt(prompt ('how far do you want to travel?'));
}

}