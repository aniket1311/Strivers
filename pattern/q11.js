/*

1
01
101
0101
10101
010101

*/

let string = "";
let start = 1;

for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    start = 1;
  } else start = 0;
  for (let j = 0; j <= i; j++) {
    string += start;
    start = 1 - start;
  }

  string += "\n";
}

console.log(string);
