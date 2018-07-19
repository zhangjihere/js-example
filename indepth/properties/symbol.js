// New in ES2015
// creating symbol
const x = Symbol();
const y = Symbol();
const z = Symbol("my cat");

console.log(x); // prints Symbol()
console.log(y); // prints Symbol()
console.log(z); // print Symbol(my cat)

console.log("typeof on symbol");
let x2 = Symbol();
console.log(typeof x2 === "symbol"); // true
let y2 = Symbol("abc");
console.log(typeof y2 === "symbol"); // true

// console.log("Symbol() cannot be used as constructor");
// let x3 = new Symbol();
// TypeError: Symbol is not a constructor

// Symbol() always returns a unique symbol
let x4 = Symbol();
let y4 = Symbol();
console.log(x4 === y4); // prints false

console.log("adding a property with symbol key, via a variable's value:");
let x5 = Symbol();
let obj = {};
obj[x5] = 3;
console.log(obj[x5]); // 3

console.log("adding a property with symbol key, via symbol value directly");
let obj2 = {};
obj2[Symbol()] = 4;
console.log(
    obj2[Object.getOwnPropertySymbols(obj2)[0]]
) // 4
// You cannot use dot notation for property keys that are symbol.

// ES2015 extended object literal expression syntax to allow dynamically evaluated property key. Like this:
console.log("computed property key:");
let aa = Symbol();
let obj3 = {[aa]:3};   // symbol
console.log(obj3[aa]); // 3

console.log("symbol properties are usually ignored");
let x6 = Symbol();
let obj4 = {};
obj4[x6] = 4;
console.log(obj4[x6]); // 4, exists
// symbol key properties are ignored by many constructs
console.log(obj); // {}
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []
for( let p in obj) {
    console.log(p);
}  // prints nothing
if ( obj4.hasOwnProperty(x6) ) {
    console.log("right! obj4 has x6 Symbol key.\n");
}

console.log("check if a object has symbol key in prototype chain:\n");
// key in obj
// Reflect.has(obj, key)

console.log("access symbol key properties:");
let x7 = Symbol("xyz");
let obj5 = {};
obj5[x7] = 4;
// bracket notation to access symbol property
console.log(obj5[x7]); // 4

console.log("Object.getOwnPropertySymbols(obj) -> return a array of symbol keys of obj.");
// list symbol key properties of an object.
let x8 = Symbol("xyz");
let x9 = Symbol("qbe");
let obj6 = {};
obj6[x8] = 4;
obj6[x9] = 6;
console.log(
    Object.getOwnPropertySymbols(obj6)
); // prints [ Symbol(xyz) ]

console.log("Reflect.ownKeys()");
let obj7 = {};
obj7["y"] = 3;
obj7[Symbol("x")] = 4;
// list all properties of a object, string valued and symbol valued
console.log(
    Reflect.ownKeys(obj)
);  // prints [ 'y', Symbol(x) ]

console.log("convert symbol to string");
let s = Symbol("cat");
// console.log("my " + s);
// TypeError: Cannot convert a Symbol value to a string

// convert symbol to string
let s2 = Symbol("tom");
console.log(s2.toString()); // symbol(cat)
// or
console.log(String(s2)); // Symbol(cat);
