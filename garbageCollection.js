//The main concept of memory management in JavaScript is reachability.
//Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

// user has a reference to the object
let user = {
  name: "John"
};

user = null;
console.log(user);


//Two references

let user1 = {
  name: "John"
};

let admin = user1;

user1=null;

console.log(admin.name);

