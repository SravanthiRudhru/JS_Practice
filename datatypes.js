console.log( "*************   NUMBER   ****************"  );
//Number
//Ex #1: no error
let message = "Hello";
message = 123456;
console.log('Example #1: '+message);

//Ex #2:
let n=123;
n=123.4;
console.log('Example #2: '+n);
let x=1 / 0;
console.log("infinity: "+x);
console.log( "not a number" / 2 );
console.log( "not a number" / 2 + 5 ); // NaN

//Big Int
let bigInt= 24343242342434324234523553453465n;
console.log( "bigInt " +bigInt); 

console.log( "*************   STRING   ****************"  );
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log('phrase: '+phrase);

let name = "John";

// embed a variable
console.log( `Hello, ${name}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3


console.log( "*************   Boolean   ****************"  );
let isGreater = 4 > 1;
console.log( 'isGreater'+isGreater ); 

console.log( "*************   Null   ****************"  );
let price = null;
console.log( `price, ${price}!` ); 

console.log( "*************   Undefined   ****************"  );
let DOB;
console.log( `price, ${DOB}!` ); 

console.log( "*************   object for more complex data structures.   ****************"  );
console.log( "*************   symbol for unique identifiers.   ****************"  );  

console.log(typeof undefined) // "undefined"

console.log(typeof 0 )// "number"

console.log(typeof 10n )// "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)

console.log(typeof null) // "object"  (2)

console.log(typeof alert) // "function"  (3)


console.log( "*************   Tasks.   ****************"  );

name = "Ilya";

console.log( `hello ${1}` ); // ?

console.log( `hello ${"name"}` ); // ?

console.log( `hello ${name}` ); // ?