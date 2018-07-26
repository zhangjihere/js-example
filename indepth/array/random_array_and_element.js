const zj_get_random_array_item = (array) => array[Math.floor(Math.random() * array.length)];
// test
const x = [1, 2, 3, 4, 5];
console.log("Get a Random Element from Array:", x);
console.log(zj_get_random_array_item(x));
console.log(zj_get_random_array_item(x));
console.log(zj_get_random_array_item(x));
console.log(zj_get_random_array_item(x));
console.log(zj_get_random_array_item(x));
console.log(zj_get_random_array_item(x));

console.log("Randomize Array");
const zj_randomize_array = (arr) => {
    // Fisher-Yates shuffles. can be used on array-like object Modify array inplace
    let i = arr.length -1;
    let j;
    while(i >= 1){
	j = Math.floor(Math.random() * (i + 1));
	[arr[i], arr[j]] = [arr[j], arr[i]];
  	i--;
    };
    return arr;
}
// test
console.log(zj_randomize_array([1,2,3,4,5,6]));

