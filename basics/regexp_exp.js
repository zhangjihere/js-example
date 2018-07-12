const s1="something xyz@example.com";
const s2="from mary@abcdefg.org";
const s3="something xyz@example com";

console.log(s1.search(/[a-z]+@[a-z]+\..../));  	// 10
console.log(s2.search(/[a-z]+@[a-z]+\..../));	// 5
console.log(s3.search(/[a-z]+@[a-z]+\..../));	// -1

console.log("########search cat:");
const text="my cat";
const result=text.search(/c[aou]t/);
if(result !== -1){
  console.log("yay");
} else {
  console.log("nah");
}
// prints yay

console.log("########replace cat:");
const x1='<img src="cat.jpg">'
const x2=x1.replace(/<img src="([-_\w]+)\.jpg">/, '<img src="$1.jpg" alt="$1">');
console.log(x2); // <img src="cat.jpg" alt="cat">

// example of regex "match" method
// capture the attribute values in a image tag
console.log("########match:");
const str='<img class="i" src="cat.jpg" alt="my cat">';
// [^"], it means that any character excluding '"'.
const result2=str.match(/<img class="([^"]+)" src="([^"]+)" alt="([^"]+)">/);

console.log(result2[0]); 	// <img class="pict" src="cat.jpg" alt="my cat">
console.log(result2[1]);	// i
console.log(result2[2]);	// cat.jpg
console.log(result2[3]);	// my cat


