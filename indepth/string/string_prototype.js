console.log(String.hasOwnProperty("prototype"));  // true
// Type
console.log(typeof String.prototype === "object"); // true
console.log(Object.prototype.toString.call(String.prototype) === "[object String]"); // true
// Parent
console.log(Object.getPrototypeOf(String.prototype) === Object.prototype); // true
// Purpose
console.log(Object.getPrototypeOf("abc") === String.prototype); // true

