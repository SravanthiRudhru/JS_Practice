//Function Declaration
function showMessage(){
    console.log("Hello, I'm JavaScript")
}

showMessage();

//Outer variables:

let name='Jhon';
greetings();
function greetings(){
    let name='Bob';
    let message = "Hello "+name;
    console.log(message);
}

//Rewrite the function using '?' or '||'

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

let age;
checkAge(1);

//Using a question mark operator ?
function checkAge(age){

    return ((age > 18)? true:console.log('Did parents allow you?'));
}


//Using OR || (the shortest variant):
function checkAge(age){
return (age > 18)|| console.log('Did parents allow you?');
}

//Function min(a, b)
console.log("min number is : "+min(2,2));

function min(a,b){
    return (a>b)?b:a;
}

//Function Expression vs Function Declaration:

let age1 = 16;


let welcome = (age1 < 18) ?
  function() { console.log("Hello!"); } :
  function() { console.log("Greetings!"); };

welcome(); 


//Callback functions:

function ask(question, yes, no){
    if (question)yes()
    else no()
}

function showOk(){
    console.log("you aggreed..!")
}

function showCancel(){
    console.log("you canceled the execution..!")
}

ask("Do u agree..?",showOk,showCancel);