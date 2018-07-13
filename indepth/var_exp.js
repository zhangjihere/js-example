// 
// Don't use var, that is better
//
console.log(x);
console.log(n===undefined);
var x;
var n;

function f() {
  console.log(i);
  
  for(var i=1;i<=3;i++){
    console.log(i);
  }

}
f();

console.log("var scope");
// var Name scope is function-level scope
// For example 
function f1() {
  var n=3;
  {
    var n=4;
  }
  return n;
};
console.log(f1()); // prints 4

// Before ES2015, Useing Function to emulate block scope
function f2 () {
  var n=3;
  (function(){
    var n=4;
  })();
  return n;
}
console.log(f2());  // prints 3

//
// Global variable
//
var x_g=3;
// as it is in the Browser
//console.log(window.x_g);

console.log("undeclared variable");
// Undeclared variable
function f3() {x3=4;return 1;}
f3();
console.log(f3());
console.log(x3);
console.log(" global.x3=> " + global.x3);

// difference between declared and undeclared variable
var x4=1;
console.log(Object.getOwnPropertyDescriptor(global, "x4"));
y4=1;
console.log(Object.getOwnPropertyDescriptor(global, "y4"));

