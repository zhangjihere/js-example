class C {
    // constructor. called when  class is called with new.
    constructor(x, y) {
   	console.log("constructor called with arg " + x);
	this.jj = y;
	this.kk = x; // add a property
    }
    ff(x) {
	console.log("ff called with arg " + x);
	return x + 1;
    }
    static ss(x) {
  	console.log("ss called with arg " + x);
	return x + 2;
    }
}
console.log(Reflect.ownKeys(C));		// [ 'length', 'prototype', 'name', 'ss' ]
// show prototype's properties
console.log(Reflect.ownKeys(C.prototype));	// [ 'constructor', 'ff' ]
console.log(C.prototype.constructor === C);	// true

console.log("\nadd your own data property:");
C.mykey = 3;
console.log(Reflect.ownKeys(C));		// [ 'length', 'name', 'prototype', 'ss', 'mykey' ]
console.log(C.mykey === 3); 			// true
console.log("\ndirectly manipulate C.prototype property:");
console.log(C.prototype.ff(3) === 4);		// true
console.log(C.prototype.constructor === C);	// true
C.prototype.gg = 9;
console.log(Reflect.ownKeys(C.prototype));	// [ 'constructor', 'ff', 'gg' ]
console.log("\nadd properties to A.prototype, use the this keyword in the constructor function definition:");


