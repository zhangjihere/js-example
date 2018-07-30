function f(x) {
    console.log("x: ", x);
    console.log("arguments: ", arguments);
}
f`a`;
f`a ${5} b`;
f`a ${5}`;
f`${5} b`;
f`${5}`;
console.log("");
console.log("f`a`"); f`a`;
console.log("f`a ${3}`");f`a ${3}`;
console.log("f`a ${3} b ${6}`"); f`a ${3} b ${6}`;
console.log("f`a ${2+3} b`");f`a ${2+3} b`;

console.log("");

// reconstruct template string
// showing order relation of literal parts and place and place holder parts
function ff() {
    var result = arguments[0][0]; // first literal string part
    // go thru by expr index, strarting from 1.
    for( var i = 1; i < arguments.length; i++) {
	result += arguments[i] + arguments[0][i];
    }
    return result;
}
console.log(`a ${1} b ${2} c ${3}`); // a 1 b 2 c 3
console.log(ff`a ${1} b ${2} c ${3}`);
console.log(`a ${1} b ${2} c ${3} d`);
console.log(ff`a ${1} b ${2} c ${3} d`);
console.log(ff`a ${1}${2}`);

console.log("test degenerate cases");
console.log(`a` === ff`a`);
console.log(`${1}` === ff`${1}`);
console.log(`a ${1}` === ff`a ${1}`);
console.log(`${1} b` === ff`${1} b`);
console.log(`a ${1}${2}` === ff`a ${1}${2}`);

