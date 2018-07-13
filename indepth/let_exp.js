// New in ES2015
// let Scope
// prints
// 3
// 4
{
  let x=3;
  {
    let x=4;
    console.log(x);
  }
  console.log(x);
}

// let with "For loop"
// using let with for loop
for(let i=1;i<=3;i++){
  console.log(i);
}
// print 1 to 3


// Different between let and var, var can re-declare and scope complex
var x=4;
var x=5;


