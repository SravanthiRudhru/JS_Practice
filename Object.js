let obj = new Object(); //"object constructor" syntax
let user={}; //Object literal syntax

user.name="Javascript";
user.age=30;

console.log(user);

user.isAdmin=true;
console.log(user);
delete user.age;
console.log(user);
user["like birds"]= true;

/*The dot requires the key to be a valid variable identifier. 
That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).
*/

//We can use square brackets in an object literal, when creating an object. That’s called computed properties.


let fruit = "apple"
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log( bag.apple ); 


bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};


//Property value shorthand
//**************************************
function makeUser(name, age){
	return {
		name:name,
		age:age,
	}
}

let user1=makeUser("Apple",22);
console.log(user1.name);

//shorthand form:
function makeUser1(name, age){
	return {
		name,
		age,
		0:23,
	}
}

let user2=makeUser1("Mango",25);
console.log(user2["name"]);
console.log(user2[0]);

//obj.__proto__ = 5; // assign a number we cant set it to a non object value.


//Property existence test, “in” operator:
//****************************************


console.log("name" in user2);  //true
console.log("dsfdf" in user2);  //false

user2["dsfdf"]=undefined;
console.log("dsfdf" in user2);  //true


//The “for…in” loop
//***************************
/* syntax
for (key in object){
	// executes the body for each key among object properties
}
*/

for (key in user2){
	console.log(key+" : "+user2[key]);
}


//Objects Ket in integer format when called will be displayed in ascending order. where as Key in string format are displayed in cfreated order.

//Tasks:
//*********************

//Hello, object:
let userDetails = {};
userDetails.name="Joj";
userDetails.surname ='pop';
userDetails.name='pete';
delete userDetails.name;

console.log(userDetails);

//Check for emptiness:
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.


console.log(isEmpty(userDetails));

let user3={};
console.log(isEmpty(user3));

function isEmpty(objName){

	return (objName=={})?true:false;
};


//Sum object properties:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum=0;
for (key in salaries){
	sum=sum+salaries[key];
}

console.log("salaries sum: "+sum);

//Multiply numeric property values by 2

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){

	for (key in obj){
		obj[key]= (typeof(obj[key])=='number')?obj[key]*2:obj[key];
	}
}
multiplyNumeric(menu);
console.log(menu);






























