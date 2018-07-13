//
// New in ES2015
//
// left_hand_side=right_hand_side
// function f (left_hand_side) {...}
// f(right_hand_side)

let xx=[3,4,6];
let [a,b,c]=xx;
console.log(a, b, c); // 3 4 6

let [a2, [b2], c2]=[3, [4], 6];
console.log(a, b, c); // 3 4 6

let [a3, ,c3]=[1,2,3,4];
console.log(a3, c3); // 1 3

let [a4, b4,...c4]=[1,2,3,4,5,6];
console.log(a4, b4, c4); // 1 2 [3, 4, 5, 6]

let [,...x]=[1,2,3,4,5,6];
console.log(x); // [2,3,4,5,6]

let [...y]=[1,2,3,4,5,6];
console.log(y);

let [a5,b5]=[2];
console.log(a5); // 2
console.log(b5); // undefined

let [a6, b6=3]=[2];
console.log(a6);// 2
console.log(b6);// 3

// let obj_leteral_form={...};
// let {b:var_name} = {a:1, b:2, c:3};
let {b7:x2}={a7:1, b7:2, c7:3}
console.log(x2);

let {d:x3=9}={a8:1, b8:2, c8:3}
console.log(x3);// 9

let {a9,b9,c9}={a9:91, b9:92, c9:93}
console.log(a9, b9, c9);// 91 92 93

let {b10} = {a10:1, b10:2, c10:30};
console.log(b10);// 2

let {c11, b11:[x4,y4]}= {a11:1, b11:[2,4], c11:3};
console.log(c11); // 3
console.log(x4);  // 2
console.log(y4);  // 4



