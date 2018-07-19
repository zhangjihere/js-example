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

// check if a object has own property
//   obj.hasOwnProperty(key);
// check if a property is in prototype chain
//   key in obj
//   Reflect.has(obj, key)
// Loop-Thru(Enumerate) Properties
// for (let k in o) {...};     //protochain yes,enumerable only yes, include symbol_key no, include string_key yes
// for (let v of iterable) {.};//N/A,  		N/A,			N/A,			N/A

console.log("list Object property:");
const o = {"k1": 20, "k2": 30};
for (let k in o) {
  console.log(o[k]);
}
console.log();
for (let k of Object.keys(o)) {
  console.log(o[k]);
}


