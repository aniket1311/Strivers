// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
0 - 1;
1 - 2;
2 - 3;

let string = "";
for (let i = 0; i < 6; i++) {
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
