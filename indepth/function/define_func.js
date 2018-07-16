// By Arrow Function expression.(ES2015)
// By the keyword function
// By constructor with keyword Function.
//

// Arrow Function
// ((x,y) => x + y)
// directly run 
console.log((xf=> xf+1)(3));

// Keyword "function"
//
// Function Declaration
console.log("Function Declaration");
function f() { return 3; }
console.log(
  f()
);// 3
function h(x,y) { return x+y;}
console.log(
  h(3, 4)
);// 7

// Function Expression
// function expression, applied on the spot
console.log("Function Expression");
console.log(
  (function () { return 3; })()
);// prints 3
console.log(
  (function (x) { return x; })(4)
);// prints 4
const g = function() { return 9; }
console.log(g()); // prints 3
