let isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left > right) {
    if (!isLetter(s[left])) left += 1;
    if (!isLetter(s[right])) right -= 1;
    else {
      if (s[left].toLowerCase() != s[right].toLowerCase()) return false;
      left += 1;
      right -= 1;
    }
  }
  return true;
};

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
