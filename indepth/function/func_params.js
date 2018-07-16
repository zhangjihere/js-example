function f (x) { return x;}
// extra arguments are ignored
console.log( f(2,3,4) === 2); // true

// unfilled parameters have value of [undefined]
function gg (x,y) { return y;}
console.log( gg(3) === undefined ); // true

// argument length
console.log("checkout params length.");
function gg2 (...arr) { return arr;}
console.log( gg2(3,4).length );

// arguments checkout
console.log("argument checkout:");
function gg3 (...arr) { return arguments; }
console.log( gg3(5,6) );
