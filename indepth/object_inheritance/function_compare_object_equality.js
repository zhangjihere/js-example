const zj_is_obj_equal = (
    (obj1, obj2) => {/* return true if 2 obje are equal. equal here means deep compare enumerable properties of object */
        const keys1 = Object.keys(obj1).sort();
	const keys2 = Object.keys(obj2).sort();
	if(keys1.length !== keys2.length){
  	    return false;
	}
	// first make sure have same keys. may save time
	if(!keys1.every((k, i) => k === keys2[i])){
 	    return false;
	}
	// check if any value is not equal
	return keys1.every((kk) => {
	    const v1 = obj1[kk];
	    const v2 = obj2[kk];
	    if(Array.isArray(v1)){
		return zj_is_array_equal(v1, v2);
	    } else if(typeof v1 === "object" && v1 !== null){  
		return zj_is_obj_equal(v1, v2);
	    } else {
		return v1 === v2;
	    }
	});
    }
);

const zj_is_array_equal = (array1, array2) => {/* return true if 2 array are equal allow array-like object, allow nested array */
    // allow array-liek object
    if(Array.isArray(array1) !== Array.isArray(array2)){
	return false;
    }
    if(array1.length !== array2.length){
	return false;
    }
    return Array.prototype.every.call(
	array1,
	(x, i) => {
	    const y = array2[i];
	    if(Array.isArray(y)){
		if(!Array.isArray(y)){
		    return false;
		} else {
		    return zj_is_array_equal(x, y);
		}
	    } else if(typeof x === "object" && typeof x !== null){
		if(!(typeof y === "object" && typeof y !== null)){
		    return false;
		} else {
		    return zj_is_obj_equal(x, y);
		}
	    } else {
		return (x === y);
	    }
	}
    );
};
// -----------------------------------------
// tests
console.log(
    // simple obj
    "\nsimple obj:", zj_is_obj_equal({"a": 1}, {"a": 1}),
    // diff value
    "\ndiff value:", !zj_is_obj_equal({"a": 1}, {"a": 2}),
    // num of obj not same
    "\nnum of obj not same:", !zj_is_obj_equal({"a": 1, "b": 2}, {"a": 1}),
    // diff order
    "\ndiff order:", zj_is_obj_equal({"a": 1, "b":2}, {"b": 2, "a": 1}),
    // test empty obj
    "\ntest empty obj:", zj_is_obj_equal({}, {}),
    // nested obj
    "\nnested obj:", zj_is_obj_equal({"a": 1, "b": {"c": 3}}, {"a": 1, "b": {"c": 3}})
);
// tset on array objects
console.log(
    "\ncomp [3,4],[3,4], equal:",     zj_is_array_equal([3,4], [3,4]),
    "\ncomp [3,4],[4,3], not equal:",!zj_is_array_equal([3,4], [4,3]),
    "\ncomp [3,4],[3] not equal:",    !zj_is_array_equal([3,4], [3,4]),
    "\ncomp [],[] equal:",    	      zj_is_array_equal([], []),
    "\narray-like objects:",          zj_is_array_equal({0:3, 1:4, "length": 2}, {0:3, 1:4, "length":2}),
    "\nnested array:",                zj_is_array_equal([3, 4, [[2, 7], 9]], [3, 4, [[2, 7], 9]]),
    "\nnegation:",		      zj_is_array_equal([3, 4, {"t": 2}], [3, 4, {"t": 2, "b": 2}]),
    				      zj_is_array_equal([{"b": 1}, 4], [{"b": 1}, 4])
);





	
