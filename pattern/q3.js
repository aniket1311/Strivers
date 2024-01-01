// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

let string = "";

for (let i = 0; i < 6; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}

console.log(string);
