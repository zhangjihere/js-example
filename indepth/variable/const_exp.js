//New in ES2015
// variable declared with const cannot be changed
// const x=3;
// x=4; // TypeError: Assignment to constant variable

// const must have a value
// const x; // SyntaxError: Missing initializing in const declaration

// if object is declared constant, the object properties can still be modified.
const ob={};
ob.p=3;
console.log(ob); // {p:3}
// we can prevent add/delete/change properties by using
//Object.preventExtensions(ob);
//Object.seal(ob);
//Object.freeze(ob);

// const no name hoisting

