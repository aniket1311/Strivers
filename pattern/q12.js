/* 

1          1
12        21
12       321
1234    4321
12345  54321
123456654321

*/
let string = "";
let n = 6;
let space = 2 * (n - 1);
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }

  for (let l = 1; l < space; l++) {
    string += " ";
  }

  for (let k = i; k >= 1; k--) {
    string += k;
  }
  space -= 2;
  string += `\n`;
}

console.log(string);
