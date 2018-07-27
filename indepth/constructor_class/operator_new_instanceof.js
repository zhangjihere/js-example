// http://www.xahlee.info/js/js_keyword_new.html
// example of creating a object with user defined constructor
// define a function, no return statement. This is the constructor
function FF(bValue){
    this.b = bValue; // adding a property
}
// some object that you want to be a prototype
const myParent = {a:3};
// optional 
FF.prototype = myParent;
// create a new object
const x = new FF(4);
console.log(x.b); // 4
console.log(x.a); // 3
// property a is from the parent
// the new object's parent is myParent
console.log(myParent.isPrototypeOf(x)); // true

// What does "new" do exactly?
const F1 = function () { this.b = 4;};
const F2 = function () { this.b = 4; return 3;};
const F3 = function () { this.b = 4; return {"c":7};};
const x1 = new F1();
const x2 = new F2();
const x3 = new F3();
console.log(x1); // prints F1 {b:4}
console.log(x2); // prints F2 {b:4}
console.log(x3); // prints {c:7}

console.log("What's the Parent of a Object Created with \"new\"?");
// showing the prototype of a object created by a constructor that doesn't have a return statement
const FF11 = function (xx) { this.yy = xx;};
const oo11 = new FF11(3);
console.log(Object.getPrototypeOf(oo11) === FF11.prototype); // true
// showing the prototype of a object created by a constructor returns a object
// this function return a object
const FF1122 = function(xx) { return {"yy":3}; };
const oo1122 = new FF1122(3);
// the parent of oo1122 is NOT FF1122.prototype
console.log(Object.getPrototypeOf(oo1122) === FF1122.prototype); // false
// because the function FF1122 returns a object
// so the newly created object is whatever the function returned.
// in this case, the object is created by literal expression {...}, and by dfault its parent is object.prototype
console.log(Object.getPrototypeOf(oo1122) === Object.getPrototypeOf({})); // true
console.log(Object.getPrototypeOf(oo1122) === Object.prototype); // true

console.log("changing constructor's prototype property does not change parent of existing object");
function FF3 () {};
FF3.prototype = {xx: 5};

const aa3 = new FF3();
console.log(aa3.xx);	// 5
FF.prototype = {yy: 6};
console.log(aa3.yy);	// undefined

// "instanceof" Operator
// obj instanceof f
// The left-hand-side obj must be a object.
// The right-hand-side f must be a function
// obj instanceof f is basically the same as f.prototype.isPrototypeOf(obj).
console.log("===========================");
const root = Object.create(null);
function ff () {};
ff.prototype = root;
const obj1 = Object.create(root); // obj1's parent is root
const obj2 = Object.create(obj1); // obj2's parent is obj1
const obj3 = Object.create(obj2); // obj3's parent is obj2
console.log(obj3 instanceof ff);	// true
console.log(Object.prototype.isPrototypeOf.call(ff.prototype, obj3));	// true

// "normal" example of using instanceof
console.log("\"normal\" example of using instanceof");
function FF4 () {
    this.p = 3;
};
const f1 = new FF4();
console.log(f1 instanceof FF4);	// true
console.log(FF4.prototype.isPrototypeOf(f1)); // true

// Don't Use "instanceof"
console.log("Don't Use \"instanceof\"");
function FF5() { return {};}; // return a object
// create a instance
const f3 = new FF5();
console.log("FF5.prototype:", Object.getPrototypeOf(FF5));
console.log("f3.prototype:", Object.getPrototypeOf(f3));
console.log(f3 instanceof FF5);			// false
console.log(FF5.prototype.isPrototypeOf(f3)); 	// false

// example of "instanceof" with unexpected result
// create a consturctor function FF6
console.log("========");
function FF6() {
    this.p = 3;
}
// create a instance
const f6 = new FF6();
// change property "prototype"
FF6.prototype = [];
console.log(f6 instanceof FF);			// false
console.log(FF6.prototype.isPrototypeOf(f6));	// false

console.log("if you want to find the subtype of a object, use \n Object.prototype.toString.call(obj));");
console.log("if you want to determine if a object is in the prototype chain of another, use \n isPrototypeof");

