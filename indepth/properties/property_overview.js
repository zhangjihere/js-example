// Arrays, function, date, regex, ...} are specialized objects. 
// They have special properties and behaviors than normal objects.
// But they still are key/value pairs.

// Standard Object, Hosted Object, User-Created Object
//
// Object internal Slots, two important slots:[[Prototype]], [[isExtensible]]
//
// Ways to Create Object
// 1.Literal expression: {...} -> Most convenient and most used
// 2.Object.create() -> Most powerful and flexible way to create object, because you can 
//   specify parent object, properties, property attributes, all in one function call.
// 3.Keyword new, in new function_name() -> complex behavior. It tries to be similar to 
//   Java's object oriented programing concepts, but the result is very complex. For some
//   standard objects, such as Date, it's the only way to create it.

// Remember the function and array are also objects.
