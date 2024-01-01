/*

     *
    ***
   ***** 
  *******
 *********
***********  
***********
 *********
  *******
   ***** 
    ***    
     *
     
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
