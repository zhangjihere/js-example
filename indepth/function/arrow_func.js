// New in ES2015
// (x => x+1)
//   similar to
// function (x) { return x+1; }
//   but no this bingding, and no arguments object.


// basic example
console.log(
  (x=> x+1)(2)
);// 3
console.log(
  [3,4,5].map(x=> x+1)
);// [4,5,6]
// arrow function , 2 pararmeters
console.log(
  ((a, b) => a + b)(3,4)
);// 7
// arrow function syntax, no parameter
console.log(
  (() => 3)()
);// 3

// assign arrow function to variable
const f = x=> x+1;
console.log(
  f(4)
); // 5

// with rest parameter
const f2 = ((...x) => (x.size));
console.log(f2(3,4,5));
// with destructuring assignment defaults
const f3 = (([a, b] = [1, 2]) => a + b);
console.log(f3()); //3
console.log(f3([4,5])); //9
// expressiong body
console.log("expressiong body:");
console.log(
  (x => x + 1)(3)
);//4
// return literal expression of object
console.log(
  ((x, y) => ({cat: x, dog: y}))(3,4)
);// {cat: 3, dog:4}
// block body
console.log("block body:");
console.log(
  (x => {
    const y = 4;
    return x + y;
  })(3)
);// 7
// arrow function recursion
console.log("arrow function recursion:");
const f4 = ( (x) => ((x<100) ? (f4(x+1)) : (x)) );
console.log(f4(3));
// No "this" bingding
// the this binding for arrow function is undefined
console.log("No 'this' binding:");
const f5 = (() => this);
console.log(f5());
// "arguments" not bound
console.log("'arguments' not bound:");
console.log(
  (() => { return arguments; })()
); // undefined
console.log(
  ( function () { return typeof arguments; } )()
); // object
console.log(
  (() => {return x;})()
); // ReferenceError: x is not defined







