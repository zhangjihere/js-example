// define a function 
function f(n) {return n + 1;}

// define a function without naming it
(function (n) {return n + 1;})
// need parenthesis, because of a quirk in js
// without parenthesis, js think it's a function declaration, and require a name.

// apply a function to value directly
(function (n) {
    return n + 1;
}(2));

// function's value is function
console.log(
    typeof function f() {
        return 2;
    } === "function"
); // prints true

const f2 = function (n) {
    return n + 1;
};
console.log(f2(2));

// function return function
console.log("function return function");
function f3(n) {
    return function (x) {
        return n + " and " + x;
    };
}
console.log(f3(2)(7));

function f4(n) {
    return function (x) {
        return Math.pow(n, x);
    }
};
console.log(f4(3)(2));

function f5(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * f5(n - 1);
    }
}
console.log(f5(4));

console.log("function composition");
function fCompose(f, g) {
    return function (n) {
        return f(g(n));
    };
}
function fi(s) {
    return s + "i";
}
function fj(s) {
    return s + "j";
}
console.log(fCompose(fi, fj)("x"));



