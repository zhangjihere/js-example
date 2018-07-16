// function with any number of parameters
function ff (a, b, ...c)
{
  return c; // c is received as array
};
console.log(
  ff(1,2,3,4)
); // [3,4]

// rest params, if non given, value is empty array
function ff2 (...r) { return r; };
console.log( ff2() ); // []

//
