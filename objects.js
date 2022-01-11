// let obj = { name: "s"}; // 1 method

// let obj2 = Object.create(obj) ;
// console.log(obj2);
// obj2.age = 20;

// let obj3 = Object.create(obj2);
// console.log(obj3);


let obj={};

obj.user = "name";

console.log(obj);


console.log(obj.user) // dot notation

console.log(obj['user']); // object literals || computed member access


obj["1user"] = "name1";

console.log(obj);

console.log(obj['1user']);


obj["1"] = "name2";

console.log(obj);


// map

let map = new Map();

map.set(1, "one");
map.set("1", "one");
map.get(1);
map.get("1");


console.log(map.size);
console.log(map)





