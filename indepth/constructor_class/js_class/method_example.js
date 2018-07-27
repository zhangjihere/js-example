class A {
    constructor (x) {
	this.p = x;
	console.log("constructor called with arg " + x);
    }
    ff (x) {
	console.log("ff called with arg " + x);
    }
    set p1(x) {
   	console.log("setter called");
    }
    get p1() {
   	console.log("getter called");
    }
    static ss(x) {
  	console.log("ss called with arg " + x)
    }
}
// --------------------------------
// using the class
// static method is called directly, not via instance of a object
A.ss(3);	// prints: ss called with arg 3
// create a instance.
const x = new A(4);	// prints: constructor called with arg 4
console.log(x);		// A { p: 4 }
x.ff(1);		// prints: ff called with arg 1
x.p1 = 1;		// prints: "setter called"
x.p1;			// prints: "getter called"

