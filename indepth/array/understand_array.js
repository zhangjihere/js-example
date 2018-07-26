console.log(typeof [3,4] === "object"); // true
// array is a object, you can add properties to it
const aa = [3, 4];
aa.xx = 7;
console.log("Array [3,4]'s ownKeys:", Reflect.ownKeys(aa)); // ['0', '1', 'length', 'xx']
console.log(Object.isExtensible([3,4]));

console.log("Index vs Property key");
const rr = [3,4];
console.log(rr.hasOwnProperty("0")); // true
console.log(rr.hasOwnProperty("1")); // true

console.log("Accessing Array with Non-Existent Inde");
const arr = [3];
console.log("arr[200] === undefined: ",arr[200] === undefined);
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray({}):", Array.isArray({})); // false

console.log("sparse array:");
const aa2 = ["a", "b"];
aa.length = 3;
console.log(aa2.length); // 3
console.log(Object.getOwnPropertyNames(aa2)); // [ '0', '1', 'length',]
console.log(aa2); // [ 'a', 'b', ]

console.log("truncating a array by setting its length:");
const aa3 = ["a", "b", "c"];
console.log(aa3.length); // 3
aa3.length = 1;
console.log(aa3.length); // 1
console.log(aa3[1]);	// undefined
console.log(Object.getOwnPropertyNames(aa3)); // [ '0', 'length' ]

console.log("Array Method");
console.log("To add element to the front, use unshift.");
console.log("To remove first element, use shift.");
console.log("To add element to the end, use push.");
console.log("To remove last element, use pop.");
console.log("To add/remove last element, use pop.");
console.log("Never use delete to remove element in a array.");

console.log("======");
console.log("str.split(...) → split string and return a array.");

console.log("Max Number of Elements");
console.log("When array index is beyond 2^32 - 2, it is treated as a property key.");
const hh = ["a"];
hh[1] = "b";
hh[Math.pow(2, 32)] = "c";
hh["1114294967297"] = "d";
hh["apple"] = "e";
console.log(Math.pow(2, 32) == 4294967296); // true
console.log(hh); // [ 'a', 'b', '4294967296': 'c" ]
console.log(Object.getOwnPropertyNames(hh)); // [ '0', '1', 'length', '4294967296' ]
// all are property keys



