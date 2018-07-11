const aa=["one", "two", 3];
console.log(aa); // ['one', 'two', 3]

const aa2=[];
aa2[0]='zero';
aa2[1]='one';
aa2[3]='three';
console.log(aa2); // [ 'zero', 'one', , 'three']

const arr=[];
for(let i=1;i<=5;i++){
  arr.push(i);
}
arr[0]="apple";
console.log("\narray.push():\n"+arr);

const nest_arr=["pa", ["deep", [4,5]], 3];
console.log("\nnest_arr " +nest_arr+ ":\n" + nest_arr[1][1][0]);

console.log("\niterate arrary")
let loop_arr=[3, "a", 4, "b", 5]
for(let x of loop_arr){
  console.log(x);
} // prints 3 4 5
console.log();
for(let [i,x] of loop_arr.entries()){
  console.log(i + " " + x)
}

console.log();
for(let i = 0; i < loop_arr.length; i++){
  console.log(loop_arr[i])
}


