/*Constructor, operator "new"
The regular {...} syntax allows to create one object. But often we need to create many similar objects,
 like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator. */

function MakeUser(name){
	this.name=name;
	this.isAdmin=false;
}

let user= new MakeUser("Apple");
//new User("Ann")
//new User("Alice") ... and so on...

console.log(user.name);
console.log(user.isAdmin);


//Exactly it works like below:

// function User(name) {
//   // this = {};  (implicitly)

//   // add properties to this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (implicitly)
// }


//Return from constructors

/*If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored. */
function BigUser() {
  this.name = "John";
  return { name: "Godzilla" };  // <-- returns this object
}
console.log( new BigUser().name );  // Godzilla, got that object


function NewUser() {
  this.name = "John";
  return ;  // <-- returns this 
}
console.log( new NewUser().name );  // John, got that object