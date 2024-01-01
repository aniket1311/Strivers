// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let string = "";

for (let i = 7; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    string += j;
  }
  string += "\n";
}

console.log(string);
