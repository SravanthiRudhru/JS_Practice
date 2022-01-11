//Object references and copying:
/*One of the fundamental differences of objects versus primitives is that objects
 are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”. */

 let user ={
 	name:'Apple',
 };

 let admin=user;

 console.log(admin.name);
 admin.name='Mango';
 console.log(user.name);

 //Comparison by reference
//*****************************
 let a={};
 let b={};

 console.log(a==b);
 console.log(a===b);

 let c=a; //copy by refrence

 console.log(a==c);
 console.log(a===c);


//Cloning and merging, Object.assign
//************************************

//Using For in loop

let emp = {
	f_1: "Apple",
	f_2: "Banana",
	f_3: "Mango"
}

let clone ={};

for (key in emp){
	clone[key]=emp[key];
}
console.log(clone);
clone.f_1='strawberry';
console.log(emp.f_1);


//Using .Assign
let clone2={};
Object.assign(clone2,emp);
console.log(clone2);

let clone3 =Object.assign({},clone);
console.log(clone3);





