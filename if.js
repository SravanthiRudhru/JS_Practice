//Ex:1
let year = 2015;
if (year == 2015) console.log( 'You are right!' );

//Ex:2:
if (year == 2015) {
    console.log( "That's correct!" );
    console.log( "You're so smart!" );
}

//Ex:3:
year = 2016;
if (year == 2015) {
    console.log( 'You guessed it right!' );
  } else {
    console.log( 'How can you be so wrong?' ); // any value except 2015
  }

//Ex:4:
if (year < 2015) {
    console.log( 'Too early...' );
  } else if (year > 2015) {
    console.log( 'Too late' );
  } else {
    console.log( 'Exactly!' );
  }


//Ex:5:

let accessAllowed;
let age = 20;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);

// "?" usage
accessAllowed = age > 18 ? true : false;

let msessage = age>18: "Hi":