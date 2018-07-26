const zj_range_n = (n) => [...Array(n).keys()];
console.log(Array(4).keys().toString());
console.log(zj_range_n(4)); // [0,1,2,3]

const zj_range = (min, max, step = 1) => {
    // return a array from min to max, inclusive, in steps of strop.
    // if step is not integer, then max may not be included
    const arr = [];
    const totalSteps = Math.floor((max - min)/step);
    for(let ii = 0; ii <= totalSteps; ii++) {
        arr.push(ii * step + min);
    }
    return arr;
};
console.log(zj_range(3, 7)); 		// [3, 4, 5, 6, 7]
console.log(zj_range(3, 4.5));		// [3, 4.5]
console.log(zj_range(3.2, 4.5));	// [3.2, 4.2]
console.log(zj_range(3, 5, .25));	// [3, 3.25, 3,5, 3.75, 4, 4.25, 4.5, 4.75, 5]
console.log(zj_range(5, 3,-.25));	// [5, 4.75, 4.5, 4.25, 4, 3.75, 3.5, 3.25, 3]
console.log(zj_range(3, 5, .7 ));	// [3, 3.7, 4.4]

// Pre ES2015
console.log("Pre ES2015");
console.log("Starting with 0");
function zj_range0(n){
    // create a array, from 0 to n, including n
    var m = n + 1;
    var arr = Array(m);
    for(var ii = 0; ii < m; ii++){
        arr[ii] = ii;
    };
    return arr;
}
console.log(zj_range0(3));

console.log("Starting with 1");
function zj_range1(n){
    // create a array, from 1 to n, including n
    var arr =Array(n);
    for(var ii = 0; ii < n; ii++){
        arr[ii] = ii + 1;
    }
    return arr;
}
console.log(zj_range1(3));

console.log("zj_range");
function zj_range_(min, max, delta){
    // creat array
    // zj_range_(n) creates a array from 1 ton n, including n.
    // zj_range_(m,n) creates a array from m to n, including n. 
    // zj_range_(n,m,delte) create s a array from n to m, by step of delta. May not inlcude m
    var arr = [];
    if(arguments.length === 1){
        for(var ii = 0; ii < min; ii++) {
	    arr[ii] = ii + 1;
	};
    } else if(arguments.length === 2) {
	var stepAmount = max - min;
   	for(var ii = 0; ii <= stepAmount; ii++) {
	    arr.push(ii + min);
  	};
    } else {
	var stepCount = Math.floor((max - min) / delta);
	for(var ii = 0; ii <= stepCount; ii++){
	    arr.push(ii * delta + min);
	};
    }
    return arr;
}
// test
console.log(zj_range_(4)); 		// [1, 2, 3, 4]
console.log(zj_range_(3, 7));		// [3, 4, 5, 6, 7]
console.log(zj_range_(3, 4.5)); 	// [3, 4]
console.log(zj_range_(3.2, 4.5));	// [3,2, 4.2]
console.log(zj_range_(3, 5, .25));	// [3, 3.25, 3.5, 3,75, 4, 4.25, 4.5, 4.75, 5]
console.log(zj_range_(5, 3,-.25));	// [5, 4,75, 4.5, 4.25, 4, 3,75, 3.5, 3.25, 3]


