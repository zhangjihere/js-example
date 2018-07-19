// {k1:v1, k2:v2,...} 
// Object.create(...)
//
// Add Property
// obj.k = v
// or
// obj[k] = v
// These will create or modify a property for the boject.
//
// Other ways to add/modify a property for the object
// 1.Reflect.set(obj, k) → Create or modify a property, functon form.
// 2.Object.defineProperty(...) → Create or modify a property and its attributes.
// 3.Objcet.defineProperties(...) → Create or modify multiple properties at once.
//
// add a new property
// creating object with property "k1" and "k2"
const obj = {"k1": 1, "k2": 2};
// adding a property
obj["p3"] = 3;
obj.p4 = 4;
delete obj.p4;
Reflect.deleteProperty(obj, "p4");
delete obj["p3"];
delete obj.k2;
console.log(obj); // {k1: 1}
