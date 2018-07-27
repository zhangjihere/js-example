// define a class
class AA{
    constructor(x) {
    	this.kk = x;
	console.log("constructor called with arg " + x)
    }
    ff(x) {
	console.log("ff called with arg " + x)
    }
    static sm(x) {
	console.log("sm called with arg " + x)
    }
}
// ---------------------------------------------------
// using the class
const obj = new AA(4);	// prints: constructor called with arg 4
console.log(obj); 	// { kk: 4 }
obj.ff(2);		// prints: ff called with arg 2
// static method is called directly, not via instance of a object
AA.sm(3);		// prints: sm called with arg 3

console.log("====================================");
// Above code is similar to the following without using class keyword
// thiss the constructor
function AA_(x) {
    this.kk = x;
    console.log("constructor called with arg " + x);
};
// static method
AA_.sm = function (x) {
    console.log("sm called with arg " + x);
};
// this is the prototype
AA_.prototype = {
    ff: function (x) {
  	console.log("ff called with arg " + x)
    }
};
// ----------------------------------------------------
// using the class
const obj_ = new AA_(4);// prints: constructor called with arg 4
console.log(obj_);	// { kk: 4 }
obj_.ff(2);		// prints: ff called with arg 2
// static method
AA_.sm(3);		// prints: sm called with arg 3

console.log("====================================");
// this the "class" and also as constructor
const AA__ = (x) => {
    console.log("constructor called with arg " + x);
    return {
  	__proto__: AA__.prototype,
	kk: x
    }
};
// static method
AA__.sm = function (x) {
    console.log("sm called with arg " + x)
};
AA__.prototype = {
    ff: function (x) {
  	console.log("ff called with arg " + x)
    }
};
// ----------------------------------------------------
// using the class
const obj__ = AA__(4); 	// prints: constructor called with arg 4
console.log(obj__);	// { kk: 4 }
obj__.ff(2);		// prints: ff called with arg 2
// static method
AA__.sm(3);		// prints: sm called with arg 3

console.log("=====================================");
console.log("Type of Class is Function");
// class is a special function object, in many ways, it's same as function
// define an empty class named A
class A {}
console.log(typeof A === "function"); 				// true
// parent is Function.prototype
console.log(Object.getPrototypeOf(A) === Function.prototype);	// true
// list all properties
console.log(Reflect.ownKeys(A)); 				// [ 'length', 'name', 'prototype' ]
// same properties as function would have
// like function, it has property key "prototype"
console.log(A.hasOwnProperty("prototype"));			// true
// like function, the value of this property key "prototype", is a object with property key "constructor"
console.log(Reflect.ownKeys(A.prototype));			// [ 'constructor' ]
// the value of the property key "constructor", is A itself
console.log(A.prototype.constructor === A);			// true


