/*
given a string of consecutive repeated characters and max value, 
return another string of max repeated characters : 
for ex: aaaaabbbbbcccdd and max is 2 should be aabbccdd
*/

let maxRepeat = (s, max) => {
  let output = '';
  let count = 0;
  let currChar = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != currChar) {
      count = 1;
      currChar = s[i];
    } else count += 1;
    if (count <= max) output += s[i];
  }
  return output;
};

console.log(maxRepeat('aaaaabbbbbcccdd', 2));
