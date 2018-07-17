// string property keys
console.log("string property keys:");
const obj = {"a":1, b:2};
const ks = Object.keys(obj);
console.log(typeof ks[0] === "string"); // true
console.log(typeof ks[1] === "string"); // true

console.log({"3":4, 3:7});// {"3":7}
// the second key 3 overrides the first, because it's converted to string

const aa = "bb";
const oo = {aa:4};  // aa is converted to "aa", not evaluated as variable
console.log(oo.aa === 4); // true
console.log(oo.bb === undefined); // true





