console.log("deep copy/clone a object");
const deep_copy_object = (obj => JSON.parse(JSON.stringify(obj)));
// test
let obj1 = {
    "k1":1,
    "k2":2,
};
let obj2 = {
    "k3":3,
    "k4":4,
    "k5":obj1
};
console.log(obj2);
// { k3: 3, k4: 4, k5: { k1: 1, k2: 2 } }
console.log(deep_copy_object(obj2));
// { k3: 3, k4: 4, k5: { k1: 1, k2: 2 } }

console.log("swallow copy, example for Array");
const oldArray = [3, 4, 5];
// shallow copy
const newArray = oldArray.slice();
console.log(oldArray);

console.log("difference between deep copy and shallow copy");
console.log("shallow copy isn't true clone");
const mm = [8];
const aa = [3, mm];
console.log("aa:",aa);
console.log("shallow copy");
const bb = aa.slice();
mm[0] = 4;
console.log("both are changed");
console.log(aa); // [ 3, [ 4 ] ]
console.log(bb); // [ 3, [ 4 ] ]

