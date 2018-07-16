// New in ES2015
// old style
console.log("old style");
function draw_circle(obj) {
  let x = obj.center[0];
  let y = obj.center[1];
  let r = obj.radius;

  return [x,y,r];
}
console.log(draw_circle({center:[3,4], radius:5}));

// new style
console.log("new style");
function draw_circle_new({center:[x,y], radius:r}) {
  return [x,y,r];
}
console.log(
  draw_circle({center:[3,4], radius:5})
);

// f take 1 array arg. First slot is assigned to var x, and second is y
console.log("array arguments 1:");
function f ([x,y]){return x+y;}
let aa=[3,4];
console.log(f(aa));

// h take 1 array arg. First slot is assigned to var x, and second is y. If the arg has length less than 2, they get default values
console.log("array arguments 2:");
function h ([x=9, y =10]) { console.log(x,y);}
h([3,4]);// 3 4
h([3]); // 3 10
h([]);	// 9 10
//h();// TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined

console.log("array arguments 3, array arg default as a integration:")
function h2([x,y]=[8,9]) { console.log(x,y);}
h2();// 8 9
h2([3]);// 3 undefined
h2([3,4]);// 3 4

console.log("array arguments 4, as 2:");
function h3([x=1,y=2] = [1,2]) { console.log(x,y);}
h3();// 1 2
h3([9]);   // 9 2
h3([9,8]); // 9 8

// objects to variables
console.log("objects to variables:");
function g ({joe:x, mary:y}) { console.log(x,y);}
g( {john:3, mary:4, joe:7, cat:6}); // 7 4

//destructure object with default values for keys
console.log("destructure object with default values for keys:");
console.log("g2:")
function g2({a:x=9, b:y}){ console.log(x,y);}
g2({b:3, c:4}); // 9 3
console.log("g3:")
function g3 ( {a:x=1,b:y=2} = {a:1, b:2}) { console.log(x,y)};
g3();
g3({b:3});
g3({b:3, c:4});
g3({b:8, a:9});

// use key names as variable names
console.log("Use Object Key Names as Variable Names:");
console.log("g4:")
function g4({a,b}) { console.log(a,b);}
g4({b:3, a:4});// 4 3

console.log("g5:")
function g5({x=1,y=2}){console.log(x,y);}
g5({y:3});
g5({y:3,c:4});
g5({y:8,x:9});

console.log("g6:")
function g6({x=1,y=2}={x:1, y:2}){ console.log(x,y);}
g6(); // 1 2
g6({y:3}); // 1 3
g6({y:3, c:4});// 1 3
g6({y:8, x:9});// 9 8

console.log("g7:");
function g7({a,b}, {c=1,d=1}={c:1,d:1}) { return [a,b,c,d];}
console.log(g7({b:3,a:4}, {c:5,d:6}));// [4,3,5,6] give all params
console.log(g7({b:3,a:4}));// [4,3,1,1] omit second param, default is {c:1,d:1}
console.log(g7({b:3,a:4},{d:9}));// [4,3,1,9] omit parts of second param. each has default of 1













