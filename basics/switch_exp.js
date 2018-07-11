x="w";

switch(x) {
  case "w":
    x += "1";
  case 32:
    x += "2";
  default:
    x += "3";
}
console.log(x); // w123
