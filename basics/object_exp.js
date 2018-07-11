const nn = {"cat":19, "dog":20, "rabbit":25};
console.log(nn["cat"])
console.log(nn.cat)

const oj={"a1":9};
oj.c1=3;
oj.c2=4;
console.log(oj,oj.a1)

delete nn["cat"];
console.log(nn);

// loop thru object's own properties, including non-enumerable properties
console.log("\nforEach including non-enumerable");
Object.getOwnPropertyNames(nn).forEach(
  function(x) {
    console.log(x); 	// name
    console.log(nn[x]);	// value
  }
)

// loop thru object's own properties, for enumerable properties only
console.log("\nforEach enumerable only")
// nn.dog.enumerable=false
Object.keys(nn).forEach(
  function(x) {
    console.log(x);	// name
    console.log(nn[x]);	// value
  }
)

// looop thru a object's enumerable properties and its inherited enumerable properties
console.log("\nfor in loop")
for (const x in nn){
  console.log(x);	// prints each key
  console.log(nn[x]);	// prints each value
}

//Get all keys of Object
console.log("\nget all keys of Object")
console.log(Object.keys(nn));	// prints['a','b','c']

// Key/Value, with one value being array
nn.c=[3,4]
console.log("\n value is a array")
console.log("nn.[\"c\"][1]:" + nn["c"][1], "nn.dog[1]:" + nn.dog[1], nn.rabbit[0]);

// syntax for accesing array/hash can be chained
console.log("\nsyntax for accessing array/hash can be chained")
console.log(
  {"a": 19, "b": 20, "c": [3,4]} ["c"][0]
)

// JSON format is basically nested js objects
const myStructure={
  name: {
    first: "Cat",
    last: "bird"
  },
  age: 19,
  hobbies: ["shopping", "dancing"]
};

// Define Method
console.log("define method");
j={}
j.m=function (x) { return x+1;};
// calling the method
const y=j.m(3);
console.log(y);		// prints 4

//this binding
const obj={"p1":3};
// make property p2 to be a function, which simply return [this]
obj.p2=function(){return this;}
// shwo obj
console.log(obj);		// {p1:3, p2: [Function]}
console.log(obj===obj.p2());	// true
// returns true because p2 is a function that returns [this], which is obj










