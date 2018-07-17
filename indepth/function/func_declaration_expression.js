// function delaration
//function f(){}
// function expression assigned to a variable
//const f = function () {};

console.log(f()); // works. return 3
function f () { return 3; }

g(); // TypeError: undefined is not a function
const g = function () { return 3; }

//
// Named function form is declaration only if it is at top level of source code or top level of function body.
// When in elsewhere, its a named function expression
//
const gg = function f() { return 3; }; // no function declaration happens here. The f is treated as named function expression
g(); // return 3
f(); // ReferenceError: f is not defined

// TypeError: undefined is not a function
console.log(h());
const h = function h() { return 3; }

// ReferenceError: bb is not defined
console.log(bb());
const aa = function bb () { return 3; }

// ReferenceError: bb is not defined
const ee = function dd () { return 3; }
console.log(dd());

// With ES2015 onward, you can always define function by const and arrow function
//const f = ((...) => {...} );
//const f = function (...) {...};
// Call of the function must happen after the definition
// Advantage:
// 1. No complexities of name hoisting
// 2. Can move function anywhere, including inside if statement or any block construct {...}. The name will be local to that code block
//
// For pre ES2015, try to always use
// var f = function (...) {...}; // Call of the function must happen after the definition.



