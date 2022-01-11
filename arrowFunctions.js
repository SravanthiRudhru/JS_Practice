//Arrow functions, the basics:

let sum=(a,b)=>a+b;
let dbl=n=>n*2;
let sayHi=()=>console.log("Hi Java Script")

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

// console.log( sum(1, 2) ); // 3
// console.log( dbl(4) ); // 
// sayHi();

// //Arrow functions can be used in the same way as Function Expressions.
// let age=2;
// let welcome=(age<18)?()=>console.log("Hello..!"):()=>console.log("greetings");
// welcome();

// //Multiline arrow functions:

// let sum2=(a,b)=>{
// 	let result=a+b;
// 	return(result);
// }

// console.log("sum2",sum2(2,4));


//Rewrite with arrow functions:
/*
function ask(question, yes, no) {
  if (question) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

// let ask=(question, yes, no)=>{
// 	if (question) yes();
// 	else no();
// }

// ask(
//   "Do you agree?",
//   ()=>console.log("You agreed."),
//   ()=>console.log("You canceled the execution."));


a => (a<18) ? 'Hello' : 'Greetings'

console.log(a)