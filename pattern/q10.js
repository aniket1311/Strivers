/* 

     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *

 */

let string = "";

for (let i = 0; i < 6; i++) {
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 6; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
