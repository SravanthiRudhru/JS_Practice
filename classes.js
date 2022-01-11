
'use strict'
class car{
	constructor(name, year){
		this.name=name;
		this.year=year;
	}

	getAge(){
		
		var d= new Date();
		return d.getFullYear()-this.year;
	}
}

var mycar = new car("Creta", 2018);
console.log("My Car name is " +mycar.name);
console.log("My Car age is " +mycar.getAge());
