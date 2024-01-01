// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

let string = "";

for (let i = 0; i < 6; i++) {
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}

console.log(string);
