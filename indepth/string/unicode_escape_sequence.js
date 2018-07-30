console.log("\\u4_hex_digits → works for character whose codepoint is less than 65536 (that is, 2^16, 16 bits)");
console.log("\\u{4_to6_hexdigits} → works for any unicode character");

console.log("\u03b1" === "α"); // true
console.log("\u{03b1}" === "α"); // true
console.log("\u{1f602}" === "�"); // true

// �
// name:FACE WITH TEARS OF JOY
// codepoint decimal: 128514
// codepoint hexdecimal: 1f602

console.log("Convert Character To/From Codepoint");
console.log("α".codePointAt(0) === 0x03b1); // true
console.log("→".codePointAt(0));
console.log(String.fromCodePoint(97, 0x03b1, 8594, 128514));
