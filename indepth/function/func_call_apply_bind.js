// Function.prototype.call
console.log("Function.prototype.call:");
function ff_1() {
    this.x = 1;
    this.y = 1;
    return this;
}
const obj = {};
console.log(
    ff_1.call(obj) === obj
); // true
console.log(obj);

function ff_2(a, b) {
    return a + b;
}
console.log(
    ff_2.call(undefined, 3, 4) === 7
);// true


console.log("Function.prototype.apply");
function ff_3() {
    return this;
}
const x2 = {k1:1};// new object
console.log(
    ff_3.apply(x2)
);// {k1: 1}

function ff_4(x, y) {
    this.x = x;
    this.y = y;
}
const x3 = {};
ff_4.apply(x3, [7, 8]);
console.log(x3);// { x: 7, y: 8}


console.log("Function.prototype.bind");
const aa = {
    "ff": function () {
        return this;
    }
};
const bb = {"bb":2};// new object bb
const gg = aa.ff.bind(bb);
console.log(gg()); // {b: 2}

console.log("===");
function ff_5(x) {
    this.p = x;
}
const bb_2 = {"b":2};
// create a new function
// with dfault ThisBinding and a default arg
const gg_2 = ff_5.bind(bb_2, 7);
// call gg
gg_2();
// note, no args are given
console.log(bb_2); // {b: 2, p: 7}



