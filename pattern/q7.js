/*

     *     [5,1,5]
    ***    [4,3,4]
   *****   [3,5,3]
  *******  [2,7,4]
 ********* [1,9,1]
***********[0,11,0]

*/

let string = "";

let n = 6;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    string += "*";
  }
  for (let l = 0; l < n - i - 1; l++) {
    string += " ";
  }
  string += "\n";
}

console.log(string);
