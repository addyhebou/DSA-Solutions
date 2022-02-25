let characterReplacement = (str, k) => {
  if (str.length === 0) return 0;
  let left = 0;
  let right = 0;
  let charMap = {};
  let max = -Infinity;
  charMap[str[0]] = 1;

  while (right < str.length) {
    let r = replacements(left, right, charMap);
    if (r <= k) {
      max = Math.max(max, right + 1 - left);
      right += 1;
      charMap = editMap(str, right, 'add', charMap);
    } else {
      charMap = editMap(str, left, 'dec', charMap);
      left += 1;
    }
  }
  return max;
};

let replacements = (left, right, charMap) => {
  return right + 1 - left - findMostFreq(charMap);
};

let findMostFreq = (charMap) => {
  let max = -Infinity;
  Object.keys(charMap).forEach((key) => {
    max = Math.max(max, charMap[key]);
  });
  return max;
};

let editMap = (str, ind, ins, map) => {
  if (ins === 'add') {
    if (!map.hasOwnProperty(str[ind])) map[str[ind]] = 0;
    map[str[ind]] += 1;
  } else map[str[ind]] -= 1;
  return map;
};

console.log(characterReplacement('AABABBA', 1));
