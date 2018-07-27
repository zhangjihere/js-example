function FF() {};
console.log(FF.hasOwnProperty("prototype"));	// true
// its valuse is a object, with just 1 property
console.log(Object.getOwnPropertyNames(FF.prototype).length === 1); //true
// the property key is  "consturctor"
console.log(FF.prototype.hasOwnProperty("constructor"));// true
// value of the property key "constructor" is the function
console.log(FF.prototype.constructor === FF); 	// true

console.log("================");
function FF2() {}
const jj = new FF2();
console.log(jj.hasOwnProperty("constructor")); // false
console.log(Object.getPrototypeOf(jj).hasOwnProperty("constructor")); // true

console.log("Purpose, let you find the creator function of a object.(but is not reliable.):");
// typical use of constructor property
function FF2() {};
const myObj = new FF2();
console.log(myObj.constructor === FF2);	//true

console.log("Value of the Property Key \"constructor\"");
function FF3(){};
const jj3 = new FF3();
const pp = Object.getPrototypeOf(jj);
console.log(jj.hasOwnProperty("constructor")); 	// false
console.log(pp.hasOwnProperty("constructor")); 	// true
console.log(pp.constructor === FF); 		// true

console.log("======");
const pp4 = {};
function FF4(){};
FF4.prototype = pp4;
const xx = new FF4();
console.log(xx.constructor === FF4); 	// fasle
console.log(xx.constructor === Object);	// true

console.log("==========");
console.log("showing array's constructor");
const aa = [];
console.log(aa.hasOwnProperty("consturctor")); 			// false
console.log(Object.getPrototypeOf(aa) === Array.prototype); 	// true
console.log(Array.prototype.hasOwnProperty("constructor")); 	// true
console.log(Array.prototype.constructor === Array);	 	// true
console.log(Array.prototype.constructor === aa.constructor);	// true

console.log("showing a date object's constructor");
const dd = new Date();
console.log(dd.hasOwnProperty("constructor"));			// false
console.log(Object.getPrototypeOf(dd) === Date.prototype);	// true
console.log(Date.prototype.hasOwnProperty("constructor"));	// true
console.log(Date.prototype.constructor === Date);		// true
console.log(Date.prototype.constructor === dd.constructor);	// true

console.log("showing a function object's constructor");
const ff6 = function () {};
console.log(ff6.hasOwnProperty("constructor")); 		// false
console.log(Object.getPrototypeOf(ff6) === Function.prototype); // true
console.log(Function.prototype.hasOwnProperty("constructor")); 	// true
console.log(Function.prototype.constructor === Function); 	// true
console.log(Function.prototype.constructor === ff6.constructor);// true

console.log("showing a literal object's constructor");
const oo = {a:3};
console.log(oo.hasOwnProperty("constructor")); 			//false
console.log(Object.getPrototypeOf(oo) === Object.prototype);	// true
console.log(Object.prototype.hasOwnProperty("constructor"));	// true
console.log(Object.prototype.constructor === Object);		// true
console.log(Object.prototype.constructor === oo.constructor);	// true

console.log("showing a RegExp object 's constructor");
const rr = /x/;
console.log(rr.hasOwnProperty("constructor"));			//false
console.log(Object.getPrototypeOf(rr) === RegExp.prototype);	//true
console.log(RegExp.prototype.hasOwnProperty("constructor"));	//true
console.log(RegExp.prototype.constructor === RegExp);		//true
console.log(RegExp.prototype.constructor === rr.constructor);	//true


