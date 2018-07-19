// setting a property will not touch prototype chain.
const bb = {"p1": 1};
// bb inherited the property key to String
console.log("toString" in bb);	// true
console.log(bb["toString"]);	// [Function: toString]
console.log(bb.hasOwnProperty("toString")); // false

console.log("set the property key toString:");
bb["toString"] = 2;
console.log(bb["toString"]);	// 2
console.log(bb.hasOwnProperty("toString")); //true

