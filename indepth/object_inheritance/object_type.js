// all true
console.log( typeof {} === "object");
console.log( typeof [3, 4] === "object");
console.log( typeof /\d+/ === "object");
console.log( typeof (new Date()) === "object");
console.log( typeof Math === "object");
console.log( typeof (function () {}) === "function"); // function is a special object

console.log("array is a object, you can add properties to it");
const aa = [3, 4];
aa["p1"] = 7;
console.log(aa);	// [ 3, 4, p1: 7]

console.log("function is object, you can add properties to it");
const ff = function () { return 4; };
console.log(ff);
ff["p1"] = 1;
console.log(ff["p1"]);

console.log("date is a object, you can add properties to it");
const dd = new Date();
dd["p1"] = 7;
console.log(dd); // { 2018-07-24T07:42:16.522Z p1: 7 }
console.log(dd["p1"]);

console.log("RegExp is a object, you can add properties to it");
const rx = /\d+/;
console.log(rx.test("123"));	// true
rx["p1"] = 7;
console.log(rx);		// { /\d+/ p1: 7 }
console.log(rx["p1"]);		// 7

