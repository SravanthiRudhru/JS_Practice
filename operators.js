//Ex:1
let x = 1;
x = -x;
console.log( x ); // -1, unary negation was applied

x = 1, y = 3;
console.log( y - x ); // 2, binary minus subtracts values

//Remainder %:
console.log( 5 % 2 ); // 1, a remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, a remainder of 8 divided by 3

//Exponentiation **:

console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16
console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

//String concatenation with binary +:

let s = "my" + "string";
console.log(s); // mystring
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

//Numeric conversion, unary +:
// No effect on numbers
x = 1;
console.log( +x ); // 1

y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0


let apples = "2";
let oranges = "3";

console.log( apples + oranges ); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5
// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


//Assignment:
x = 2 * 2 + 1;

console.log( x ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0


//The postfix and prefix forms
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value