console.log("create object with 2 properties");
const jj = { aa: 7, bb: 8};
console.log(jj); // { aa: 7, bb: 8 }

console.log("ending comma is ok");
const h4 = { k1: 7, k2: 8, };
console.log(h4); // { k1: 7 , k2: 8, }
console.log("repeated comma is not ok, for example, const hh = { a:1, , b:2 }; It will prompt SyntaxError: Unexpected token");

console.log("example of object with a method");
const my = {
    dd: 7,
    ff: function (x) { return x + 1; },
};
console.log(my); // { dd: 7, ff: [Function: ff] }
console.log(my.ff(3)); //4

console.log("ES2015 computed property syntax. use [] around the property key");
const obj = {["a" + "b"]: 4};
console.log(obj.ab); // 4

console.log("computed property key, you want a variable's value to be the property key.");
const x = "cc";
const obj2 = {[x]: 3};
console.log(obj2.cc); // 3

console.log("new syntax shorthand for method, ES2015");
const obj3 = {
    f(x) { return x + 1; },
    g:4
};
console.log(obj3.f(2)); // 3

// Object Literal Expression vs Object.Create
// { k1: v1 .. }
// Object.create(Object.prototype, {k1: {value:v1, enumerable: true, configurable: true, writable: true}, ...})
console.log("check equivalence of 2 ways to create a object");
const o1 = {"p":1};
const o2 = Object.create(
    Object.prototype,
    { "p":
        { value:1, enumerable:true, configurable: true, writable:true }
    }
);
console.log( Object.getPrototypeOf(o1) === Object.getPrototypeOf(o2)); //true
console.log( Object.getOwnPropertyDescriptor(o1, "p") );
// { value: 1, wirtable: true, enumerable: true, configurable: true }
console.log( Object.getOwnPropertyDescriptor(o2, "p") );
// { value:1, writable: true, enumerable: true, configuration: true }
console.log( Object.isExtensible(o1)); // true
console.log( Object.isExtensible(o2)); // true

