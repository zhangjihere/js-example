console.log("Get/Set Prototype:");
let obj = { k1: 12, k2: "aa"};

console.log("Find Parent:");
console.log(Object.getPrototypeOf(obj));
console.log(Reflect.getPrototypeOf(obj));
console.log(obj.__proto__);

let proto = { p1:0, p2: "0" };
console.log("Set Parent:");
console.log(Object.setPrototypeOf(obj, proto));
console.log(Reflect.setPrototypeOf(obj, proto));
obj.__proto__ = proto;

console.log("Check If is in Prototype Chain:");
console.log(proto.isPrototypeOf(obj));

console.log("prototype check:");
console.log(
    Object.getPrototypeOf(Object) === Function.prototype &&
    Object.getPrototypeOf(Function) === Function.prototype &&
    Object.getPrototypeOf(Array) === Function.prototype &&
    Object.getPrototypeOf(Date) === Function.prototype &&
    Object.getPrototypeOf(RegExp) === Function.prototype
);  // true
console.log("Math & JSON's prototype:");
console.log(Object.getPrototypeOf(Math) === Object.prototype);
console.log(Object.getPrototypeOf(JSON) === Object.prototype);

console.log("Parent of Function.protytype is Object.prototype:");
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); // true

console.log("{Function, prototype, Array.prototype, Date.protytype, RegExp.prototype}'s parent are Object.prototype:");
console.log(
    Object.getPrototypeOf(Function.prototype) === Object.prototype &&
    Object.getPrototypeOf(Array.prototype) === Object.prototype &&
    Object.getPrototypeOf(Date.prototype) === Object.prototype &&
    Object.getPrototypeOf(RegExp.prototype) === Object.prototype
);  // true

console.log("the parent of Object.prototype is null");
console.log(Object.getPrototypeOf(Object.prototype)); // true
console.log("creating object without parent");
const tt = Object.create(null);
console.log(Object.getPrototypeOf(tt) == null); // true

console.log("Prototype of user Created Objects:");
console.log(
    Object.getPrototypeOf({}) === Object.prototype &&
    Object.getPrototypeOf([]) === Array.prototype &&
    Object.getPrototypeOf(function () {}) == Function.prototype &&
    Object.getPrototypeOf(/./) === RegExp.prototype &&
    Object.getPrototypeOf(new Date()) === Date.prototype
); // true

console.log("Parent of Object Created by Constructor Function:");
console.log("example of inheritance by constructor");
const o1 = {};
const FF = function () {};
FF.prototype = o1;
const o2 = new FF();
console.log(Object.getPrototypeOf(o2) === o1); // true

console.log("example of inheritance by constructor");
const dd = new Date();
console.log(Object.getPrototypeOf(dd) == Date["prototype"]); // true

