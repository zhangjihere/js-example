// New is ES2015
// function with default parameter values
function f(x=4, y=2)
{
  console.log( x,y );
}
f();

// default argument before ES2015
function f2 (x) {
  if ( x===undefined ) {
    x = 3; // default value
  }
  console.log(x);
};
f2();

// default value expression evaluated at call time
let m = 1;
function f3(x=m) { return x; }
m = 9;
console.log( f3() ); // 3 

// later value expression have access to previous value expression
function f(x=4, y=x) {
  return [x, y];
}
console.log(
  f()
); // [4, 4]

// passing undefined is equivalent as not passing
console.log("passing undefined:");
function f(x=4) {
  console.log(x);
}
f(undefined);// 4

// passing null does not work
console.log("null means really pass null");
function f (x=3) { console.log(x);}
f(null); // null

