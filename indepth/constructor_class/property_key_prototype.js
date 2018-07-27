console.log("every function has a property key \"prototype\"");
// standard function objects
console.log(Function.hasOwnProperty("prototype"));	// true
console.log(Array.hasOwnProperty("prototype"));		// true
console.log(Object.hasOwnProperty("prototype"));	// true
console.log(Date.hasOwnProperty("prototype"));		// true

console.log("user-defined function");
console.log(function(){}.hasOwnProperty("prototype"));	// true 
console.log(((x) => x+1).hasOwnProperty("prototype"));	// true

console.log("prints all global function objects and report if they have key \"prototype\" ");
let envi = undefined; // check window or global environment
if(global !== undefined){
    envi = global;
} else {
    envi = window;
}
(    
    Reflect.ownKeys(envi).forEach(
	(x) => { 
	    if(typeof envi[x] === "function") {
		if(envi[x].hasOwnProperty("prototype")){
		    console.log("yes", x);
		} else {
		    console.log("no", x);
		}
	    }
	}
    )
)
console.log("if running in browser, replace [global] by [window]");

console.log("ff.prototype is parent of [new ff()], at time of call of [new ff()]");
function ff() {};
const x = new ff();
console.log(Object.getPrototypeOf(x) === ff.prototype);	// true
// note: provided ff does not return a object in definition

//Default Value
console.log();
// every function has a property key "prototype"
function FF() {};
console.log(FF.hasOwnProperty("prototype"));	// true
// its value is a object, with just 1 property
console.log(Object.getOwnPropertyNames(FF.prototype).length === 1); // true
// the property key is "constructor"
console.log(FF.prototype.hasOwnProperty("constructor"));	// true
// the value of the property key "consturctor" is the function
console.log(FF.prototype.constructor === FF); 	// true
// show its attributes
console.log(Object.getOwnPropertyDescriptor(FF.prototype, "constructor"));
// { value: [Function: FF],
//   writable: true;
//   enumerable: false;
//   configurable: true }

// show its parent
console.log(Object.getPrototypeOf(FF.prototype) === Object.prototype);// true
console.log(Object.getPrototypeOf(FF));	// [Function]

// Builtin Function's Value of Property Key "prototype"
console.log("For any JavaScript's buildin constructor B, the value of B.prototype is a object, and the onlyg way to express that object is just via the \"prototype\" property access, that is B.prototype");
console.log(Object.getPrototypeOf(new Object()) === Object.prototype);		// true
console.log(Object.getPrototypeOf(new Function()) === Function.prototype);	// true
console.log(Object.getPrototypeOf(new Array()) === Array.prototype);		// true
console.log(Object.getPrototypeOf(new Date()) === Date.prototype);		// true
console.log(Object.getPrototypeOf(new RegExp()) === RegExp.prototype);		// true

console.log();
console.log("Standard Constructor's Prototype Property Cannot be Changed");
console.log("Array.prototype:\n", Object.getOwnPropertyDescriptor(Array, "prototype"));
// { values: [],
//   writable: false,
//   enumerable: false,
//   configurable: false }
console.log("Changing it results in error.");
"use strict";
Array.prototype = {};
// Array.prototype = {};
// 		   ^
// TypeError: Cannot assign to read only property 'prototype' of function Array() { [native code] }

