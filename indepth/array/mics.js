console.log("Array.prototype.join, to string");
const arr = [3, 4,5];
console.log(arr.join());
console.log(arr.join("-")); // true

console.log("Array-like Object to Array:");
console.log(typeof Array === "function");

const aa = {0: "a", 1: "b", 2: "c", length: 3};// create a array-like object
const bb = Array.prototype.slice.call(aa); // convert to array
console.log(Array.isArray(aa)); // false
console.log(Array.isArray(bb)); // true
console.log("aa:", aa);
console.log("bb:", bb);

// the object [Array] is a standard object, and is a function object
console.log(typeof Array === "function"); // true
// Array has a property key "prototype"
// every function has aproperty key "prototype", by spec.
console.log(Object.prototype.hasOwnProperty.call(Array, "prototype")); // true
// the value of Array.prototype, is a object, and the only way to express it is just Array.prototype
// This object Array.prototype, is the parent of array data type object, by spec.
console.log(Object.getPrototypeOf([]) === Array.prototype);	// true
// This object Array.prototype has a property key "slice"
console.log(Array.prototype.hasOwnProperty("slice"));		// true
// Its value is a function
console.log(typeof Array.prototype.slice === "function");	// true
// The parent of Array.prototype.slice is Function.prototype
console.log(Object.getPrototypeOf(Array.prototype.slice) === Function.prototype);// true
// Function.prototype has a property key "call"
console.log(Function.prototype.hasOwnProperty("call")
    && (Object.getOwnPropertyNames(Function.prototype).indexOf("call") >= 0)
); // true
console.log("So when eval Array.prototype.slice.call, \nit's actually calling the value of the property key \"call\" of the object Function.prototype.\nBecause, the property is in the prototype chain.");
console.log("What the [<f>.call(<obj>)] do is to call <f> with <f>'s [this] value set to [obj]");

// You can use Array Methods directly by calling
console.log("Array.prototype.<array_method_name>.call(array_like_obj, args)");
console.log("Notice, the array_like_object must have lenght property.");
// using map directly on array-like object
// create a array-like object
const alo = {0: "a", 1: "b", 2: "c", length: 3};
// the function you want to apply to array-like object's elements
function append_z_to_string(x) {
    return x + "z";
}
// using map on a array-like object
const myResult = Array.prototype.map.call(alo, append_z_to_string);
// result is a array
console.log(Array.isArray(myResult));// true
console.log(myResult); // ['az', 'bz', 'cz']

console.log("List Properties");
console.log("Object.keys(o), thies method return a interator object");
console.log("Object.getOwnPropertyNames(o)");
console.log("Object.getOwnPropertySymbols(o)");
console.log("Reflect.ownKeys(o)");

console.log("Array.from, use Array-like Object or Iterable:");
console.log("Convert Array-like Object to Array");
const alike = {0: "a", 1: "b", length: 2};
const ar = Array.from(alike);
console.log(ar) // [ 'a', 'b']
console.log(Array.isArray(ar)); // true

console.log("Iterable to Array");
const ss2 = new Set([3, 4, 5]); // a set object
const ar2 = Array.from(ss2);
console.log(ar2) //  [ 3, 4, 5 ]

console.log("With Map Function");
const ss3 = new Set([3, 4, 5]);
// convert to array, but add one to each
const ar3 = Array.from(ss3, x => x * 2);
console.log(ar3); // [ 8, 10, 12 ]

console.log("Flatten Nested Array");
var aa2 = [1, [9, [3, 7]], 4];
console.log("flatten array 1 level");
console.log(Array.prototype.concat.apply([], aa2)); // [ 1, 9, [ 3, 7], 4 ]

console.log("Flatten Nested Array");
const zj_flatten_array = (array1, n) => {
    // flatten nested array n levels. n default to 1. n can be large, such as thousands.
    // Because when array no longerhas element that's array, the function return it immediately
    if(n === undefined) {
  	n =1;
    }
    if(n > 0 && Array.prototype.some.call(array1, Array.isArray)) {
    	return zj_flatten_array(Array.prototype.concat.apply([], array1), n-1);
    } else {
	return array1;
    }
};
// --------------------------------
// test
const nest_arr = [0, [1, [2, [3, [4, [5, [6]]]]]], "xyz"];
console.log("nest_arr:", nest_arr);		// [ 0, [ 1, [ 2, [Array] ] ], 'xyz' ]
console.log(zj_flatten_array(nest_arr));	// [ 0, 1, [ 2, [ 3, [Array] ] ], 'xyz' ]
console.log(zj_flatten_array(nest_arr, 1));	// [ 0, 1, [ 2, [ 3, [Array] ] ], 'xyz' ]
console.log(zj_flatten_array(nest_arr, 2));	// [ 0, 1, 2, [ 3, [ 4, [Array] ] ], 'xyz' ]
console.log(zj_flatten_array(nest_arr, 3));	// [ 0, 1, 2, 3, [ 4, [ 5, [Array] ] ], 'xyz' ]
console.log(zj_flatten_array(nest_arr, 4));	// [ 0, 1, 2, 3, 4, [ 5, [ 6 ] ], 'xyz' ]	
console.log(zj_flatten_array(nest_arr, 400));	// [ 0, 1, 2, 3, 4, 5, 6, 'xyz' ]

console.log("Split Array");
const zj_split_array = (array37656, f_test) => {
    // given a array array37656, return a nested array. 
    // f_test is a function. If it returns true on a element, it's a split point.
    // split point is not included in the result.
    const result = [];
    let lastFound = 0;
    for(let i = 0; i< array37656.length; i++) {
	if(f_test(array37656[i])){
	    result.push(array37656.slice(lastFound, i));
	    lastFound = i + 1;
	}
    }
    result.push(array37656.slice(lastFound));
    return result.filter((x) => x.length !== 0);
}
// test
const f = (x) => x === 0;
console.log(zj_split_array([3,0,5], f)); 	// [ [3], [5] ]
console.log(zj_split_array([3,0,0,5], f)); 	// [ [3], [5] ]
console.log(zj_split_array([0,1,5], f)); 	// [ [1, 5] ]
console.log(zj_split_array([], f));		// []


