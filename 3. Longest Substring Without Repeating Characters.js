let lengthOfLongestSubstring = (s) => {
  if (!s) return 0;
  let left = 0;
  let right = 0;
  let characters = new Set();
  let max = 0;

  while (right < s.length) {
    while (characters.has(s[right])) {
      characters.delete(s[left]);
      left += 1;
    }
    characters.add(s[right]);
    max = Math.max(max, right - left + 1);
    right += 1;
  }
  return max;
};
