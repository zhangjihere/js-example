// js strings are sequence of 16-bits values, not character
console.log("�".length === 2); // false

console.log("�X".slice(1)); //prints X
console.log("Real Length: Number of Characters in String");
const zj_string_real_length = str => {
    let i = 0;
    for(let c of str){
    	i += 1;
    }
    return i;
};
// ----------------------------------------
// test
console.log(zj_string_real_length("�") === 1); //true
