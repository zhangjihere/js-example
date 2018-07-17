console.log(
    typeof(x) => (x + 1) === "function"
);// true

// assign a function to variable
const f = (x) => (x + 1);
console.log(f(2)); // prints 3

//function returning a function
const g =
        (n) =>
        (x) => (n + " and " + x);
console.log(g(2)(7)); // prints " 2 and 7 "

// function returning a function
const kf =
        (n) =>
        (x) => Math.pow(x, n);
console.log(kf(2)(4));

// Function taking a function as Argument
console.log("function as an argument:");
// f2 takes a function g2 as arg, and return g2(4)
const f2 = (g2) => (g2(4));
// this function just add 1 to arg
const h2 = (x) => x + 1;
console.log(f2(h2));

// Function Compostion
console.log("function composition");
// take two single value functions f(x) and g(x)
// and returns a function that computers f(g(x))
const fCompose = (f, g) => (x) => (f(g(x)));
const fi = (s) => (s + "i"); // append "i" to string
const fj = (s) => (s + "j"); // append "j" to string
console.log(
    fCompose(fi, fj)("z") === "zji"
);

