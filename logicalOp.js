console.log( null || 2 || undefined );

console.log( 1 && null && 2 );

console.log( null || 2 && 3 || 4 );

//Check the range between
let age=100;

if (age>=14 && age<=90){
    console.log("age is in the range")
}else{
    console.log("age is not in the range")
}

//Check the range outside
if (!(age>=14 && age<=90)){
    console.log("age is not in the range")
    
}else{
    console.log("age is in the range")
}

if (age<14 && age>90){
    console.log("age is not in the range")
    
}else{
    console.log("age is in the range")
}

//Check the login

let userName="wqqwer";
let password ="";

if (userName==='Admin'){
    console.log("Please enter the Password");
    if (password==='TheMaster'){
        console.log("Welcome");
    }else if(password===''||password===null){
        console.log("Cacelled");
    }else{
        console.log("Wrong Password");
    }
    
}else if(userName==='' || userName=== null){
    console.log("Cancelled");
}else{
    console.log("I dont know you");
}

