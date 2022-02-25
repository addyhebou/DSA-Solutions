// modify original string in place
let reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left += 1;
    right -= 1;
  }
};

// return new string
let reverseString2 = (s) => {
  let left = 0;
  let right = s.length - 1;
  let str = s.split();

  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    sstr[right] = temp;
    left += 1;
    right -= 1;
  }
};

console.log(reverseString2('Addy'));
