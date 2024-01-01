/*

*********** [0,11,0]
 *********  [1,9,1] 
  *******   [2,7,2]
   *****    [3,5,3] 
    ***     [4,3,4]
     *      [5,1,5]

*/

let string = "";

let n = 6;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
    string += "*";
  }
  for (let l = 0; l < i; l++) {
    string += " ";
  }
  string += "\n";
}

console.log(string);
