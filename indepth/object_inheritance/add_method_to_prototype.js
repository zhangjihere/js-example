console.log("add a removeVowels method for string prototype");
String.prototype.removeVowels = function () { return this.replace(/[aeiou]/g, ""); };
console.log("how are you".removeVowels()); // "hw r y"

console.log("add method to array prototype");
// remove first and last item of a array, return the removed items
Array.prototype.shiftAndPop = function () { return [this.shift(), this.pop()]; };
// test
let aa = [0, 1, 2, 3, 4];
console.log(aa.shiftAndPop()); // [ 0, 4 ]
console.log(aa);	       // [ 1, 2, 3 ]

console.log("add a method to the number prototype");
Number.prototype.plusN = function (n) { return (this + n); };
console.log( 3["plusN"](4) ); // 7

console.log("Strong Suggestion!\nDo Not Add to Prototype Object.");
