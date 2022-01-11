//?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
/*he result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.*/
let a,b;
result = (a !== null && a !== undefined) ? a : b;
console.log('result: '+result);

let user = "John";
console.log(user ?? "Anonymous"); // John (user defined)


console.log(null ?? undefined ?? undefined ?? false);