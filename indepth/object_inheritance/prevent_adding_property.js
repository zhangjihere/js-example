const arr = [ Object, Array, Function, String, Date, RegExp ];
console.log(
    arr.every(x => Object.isExtensible(x))
); // true

const obj = { k1: 10, k2: "ab" }
console.log("Check If Object is Extensible");
console.log(Object.isExtensible(obj));
console.log("Prevent Adding Properties");
console.log(Object.preventExtensions(obj));
console.log("Prevent Adding/Deleting Properties");
console.log(Object.seal(obj));
console.log(Object.isSealed(obj));
console.log("Prevent Adding/Deleting/Writing Properties");
console.log(Object.freeze(obj));
console.log(Object.isFrozen(obj));

