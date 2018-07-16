function f1() {
  return arguments; // return the arguments object
}
console.log(
  f1(3,4,5)
);// {'0':3, '1': 4, '2': 5}

// [arguments] is array-like object
function f2() {
  return Array.isArray(arguments);
}
console.log( f2() ); // false
