// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

let string = "";

for (let i = 6; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    console.log(j);
    string += "*";
  }
  string += "\n";
}

console.log(string);
