const x = [3,4];
console.log(x);		// [3,4]
console.log(x.length);	// 2

const x2 = [3, 4, ,];
console.log(x2);	// [3, 4, <1 empty item>
console.log(x2.length);	// 2
console.log(x2[2]);

console.log("\nRepeated Comma");
const x3 = ["a", ,"c"];
console.log(x3[0]); // a
console.log(x3[1]); // prints "undefined", but element doesn't ex3ist
console.log(x3[2]); // c
console.log(x3.length); // 3
console.log(Object.getOwnPropertyNames(x3)); // [ '0', '2', 'length' ]
// note, there's no property key "1"

console.log("Creating Array by Constructor, \nit is better to use literal expression not using new Array(...)");


