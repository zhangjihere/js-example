console.log("##### for #####");
for(let i=0; i<9; i++){
  console.log(i);
}

console.log("##### while #####");
let x=0;
while(x!==5){
  console.log(x);
  x++;
}

console.log("##### do-while #####");
let y=0;
do {
  console.log(y);
  y++;
} while(y !==5);


console.log("##### do-while #####");
for(let i=0; i<=5; i++){
  if(i==3) {
    continue;
  }
  console.log(i);
}

console.log("##### continue #####");
for(let i=0; i<=5; i++){
  console.log(i);
  if(i==3){
    break;
  }
}

let t=0+1;
t+="3";
console.log("\n"+t);



