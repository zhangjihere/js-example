console.log("Do not use the sparse array.\nIt is not useful.\n\n");

console.log("delete operator results a sparse array");
console.log("using delete to remove last item");
const rr = ["a", "b"];
delete rr[1];
console.log(rr.length); // 2
console.log(rr); 	// [ 'a', <1 empty item> ]

console.log("By adding a item with index greater than 1 than the last item's index.");
const cc = [];
cc[2] = "b"; // now cc is sparse array
console.log(cc); 	// [ <2 empty items>, 'b' ] 
console.log(cc[0]);	// undefined
console.log(cc[1]);	// undefined
console.log(cc[2]);	// b
console.log(cc.length); // 3

