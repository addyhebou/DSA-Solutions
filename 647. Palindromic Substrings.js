var countSubstrings = function (s) {
  let i;
  let j;
  let result = [];
  count = 0;

  let checkIfPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) return 0;
      left += 1;
      right -= 1;
    }
    return 1;
  };

  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      count += checkIfPalindrome(s.slice(i, j));
    }
  }
  return count;
};

console.log(countSubstrings('abc'));
