var firstUniqChar = function (s) {
  let freqMap = buildMap(s);
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (freqMap[char] === 1) return i;
  }
  return -1;
};

let buildMap = (s) => {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map.hasOwnProperty(s[i])) map[s[i]] = 0;
    map[s[i]] += 1;
  }
  return map;
};
