let evenArr=[];

for (i=1;i<=10;i++){
    if (i%2==0){
        evenArr.push(i);
    }
}
console.log(evenArr);


//Repeat until the input is correct
let num=99;
while (!(num>100)){
    console.log("Enter the number greater than 100");
    if (num>100) break;
}


let arr = [1,2,3,4,5];
let obj = {a: 1, b: 2, c: 3}


// give index

for (i in arr) {
console.log(i)
}

// values
for (i of arr) {
console.log(i)
}

// i returns keys
for (i in obj) {
console.log(i)
console.log(obj[i])
}

// unapplible
for (i of obj) {
console.log(i)
}