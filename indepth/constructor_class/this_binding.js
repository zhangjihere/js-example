"use strict"
// example showing waht <this> is in a method call
console.log("this in Method Call");
let ob = {
    k1: function () {
        return this;
    }
};
console.log(ob === ob.k1()); //true

console.log("function as constructor, this in constructor call (new f())");
const Ff = function () {
    this.k1 = 4;
};
const ff = new Ff();
ff.newFunc = function () {
  console.log("new Func");
  this.k2 = 5;
};
console.log(ff.newFunc());
console.log(ff);

//console.log(

console.log("<this> in Global function call");
const f2 = function () {
    return this;
};
console.log(f2()); // true

console.log("<this> is in nested function has value undefined, if under use strict \"use strict\"");
const f3 = function () {
    const g3 = function () {
        return this;
    };
    return g3();
};
console.log(f3() === undefined); // true
// if in non strict mode, it return s the global object

console.log("example of testing what <this> is in nested function");
let o = {
    k1:12,
    f4:function () {
        const g4 = function () {
            return this;
        };
        return g4();
    },
    f5:function () {
        return this.k1;
    }
};
console.log(o.f4());
console.log(o.f5());


