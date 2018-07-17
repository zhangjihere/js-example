// closure example
function myContext() {
    let x = 0;
    function f() {
        x += 2;
        return x;
    }
    return f;
} 
const gf = myContext();
// gf is now function with closure

// gf maintains a state
console.log(gf()); // 1
console.log(gf()); // 2
console.log(gf()); // 3

// example of closure functions sharing context
console.log("closure function sharing context:");
function myContext2() {
    let x = 0;
    return {
        "f": function () {
            x = x + 1;
            return x;
        },
        "g": () => (x = x - 1)
    };
}
const c = myContext2();

console.log(c.f());//1
console.log(c.f());//2
console.log(c.f());//3
console.log("===");
console.log(c.g());//2
console.log(c.g());//1
console.log(c.g());//0

// function with state, using properties
console.log("function with state, using properties:");
function f () {
    f.x +=1;
    return f.x;
};
f.x = 0; // x is a property, used as state

console.log(f());// 1
console.log(f());// 2
console.log(f());// 3

