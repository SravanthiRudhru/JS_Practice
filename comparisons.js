// //Ex:1
// console.log( 2 > 1 );  // true (correct)
// console.log( 2 == 1 ); // false (wrong)
// console.log( 2 != 1 ); // true (correct)
// //Ex:2
// let result = 5 > 4; // assign the result of the comparison
// console.log( result ); // true

// //String comparison:
// console.log( 'Z' > 'A' ); // true
// console.log( 'Glow' > 'Glee' ); // true
// console.log( 'Bee' > 'Be' ); // true

// //Comparison of different types:
// console.log( '2' > 1 ); // true, string '2' becomes a number 2
// console.log( '01' == 1 ); // true, string '01' becomes a number 1
// console.log( true == 1 ); // true
// console.log( false == 0 ); // true

// let a = 0;
// console.log( Boolean(a) ); // false
// let b = "0";
// console.log( Boolean(b) ); // true
// console.log(a == b); // true!

// //Strict equality:
// console.log( 0 == false ); // true
// console.log( '' == false ); // true

// //A strict equality operator === checks the equality without type conversion.
// console.log( 0 === false ); // false, because the types are different
// console.log( null === undefined ); // false
// console.log( null == undefined ); // true

// console.log( null > 0 );  // (1) false
// console.log( null == 0 ); // (2) false
// console.log( null >= 0 ); // (3) true

//Tasks:
console.log(5 > 4); //true
console.log("apple" > "pineapple"); //false
console.log("2" > "12"); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false
