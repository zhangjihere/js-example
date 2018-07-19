// Dot notation cannot be used when the property name contain space. For example, {"a b":7}
// Dot notation cannot be used when the property name is a language keyword or reserved word. For example, obj.for.
// Dot notation cannot be used when the property name is number. For example, obj.7
// Dot notation cannot be used to create new property at run time. For example, when you have a property name as value of a variable, constructed from user input.
// Dot notation cannot be used for symbol key properties.
//
// Example of a property name with space in it:
// property name that contains space
const x = {"a b": 8};
console.log(x["a b"] === 8);// true

// a property with name that's a digit
const x2 = {"3":8};
console.log(x2["3"] === 8); // true
console.log(x2[3]);	   // 8, JavaScript automatically convert 3 to string

// creating a property, with name from a value of variable
// dot notation won't work
const obj = {"p1":1};
const v = "p2";
obj[v] =2;
console.log(obj); // {p1: 1, p2: 2}

