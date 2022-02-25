/*

Input: s = "3[a2[c]]"
Output: "accaccacc"

if s[i] is a number
    factor = s[i]
    return factor * decode(s[i+1])
if s[i] is a char
    return char


    
    let decodeString = (s) => {
        let leftOffIndex = 0;
        let helper = (currString) => {
            let str = '';
            let i = 0;
            while (i < currString.length) {
                if (typeof currString[i] == 'number') {
                    leftOffIndex++;
                    str += currString[i] * helper(currString.slice(i + 2));
                    i = leftOffIndex + 1;
                } else if (typeof currString[i] == 'string' && currString[i] != ']') {
                    leftOffIndex++;
                    str += currString[i];
                } else if (typeof currString[i] == ']') {
                    leftOffIndex++;
                    return str;
                }
                i += 1;
            }
            return str;
        };
        return helper(s.slice(leftOffIndex));
    };
    
    
    let decodeString = (s) => {
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] != ']') stack.push(s[i]);
            else {
                substr = '';
                while (stack[stack.length - 1] != '[') substr = stack.pop() + substr;
                stack.pop();
                
                k = '';
                while (stack.length > 0 && !isNaN(stack[stack.length - 1]))
                k = stack.pop() + k;
                stack.push(substr.repeat(parseInt(k)));
            }
        }
        return stack.join('');
    };
    
    */

let decodeString = (s) => {
  // (1) Create stack
  let stack = [];

  // (2) Push every character to stack
  for (let i = 0; i < s.length; i++) {
    if (s[i] != ']') stack.push(s[i]);
    else {
      // (A) Create substr (the string with multiplied lettering)
      let substr = '';
      // (B) Keep adding the letters in the back of the stack to the substr
      while (stack.length > 0 && stack[stack.length - 1] != '[')
        substr = stack.pop() + substr;
      // (C) Pop out the '[' character
      stack.pop();
      // (D) Convert the characters previous to the '[' character to an int factor to multiply
      let factor = '';
      while (stack.length > 0 && !isNaN(stack[stack.length - 1]))
        factor = stack.pop() + factor;
      factor = parseInt(factor);
      // (E) push the substr factor times
      stack.push(substr.repeat(factor));
    }
  }

  // (3) Return string out stack
  return stack.join('');
};

let str = decodeString('3[a]2[bc]');
console.log(str);

/*
Lesson of abstraction:

anytime you're having this going back and forth within a string, 
and processing and bouncing out, you can use a stack data structure

*/
