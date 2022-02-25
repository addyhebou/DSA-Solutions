/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = (s, t) => {
  let sMap = {};
  let tMap = buildMap(t);
  let right = getRightIndexOfFirstWindow(s, sMap, tMap);
  let left = 0;

  let newIndices = adjust(s, left, right, tMap, sMap);
  left = newIndices[0];
  right = newIndices[1];

  return checkMatchingMaps(sMap, tMap) ? s.slice(left, right) : '';
};

let buildMap = (t) => {
  let map = {};
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!map.hasOwnProperty(char)) map[char] = 0;
    map[char] += 1;
  }
  return map;
};

let getRightIndexOfFirstWindow = (s, sMap, tMap) => {
  let right = 0;
  let s_keys = Object.keys(sMap);
  let t_keys = Object.keys(tMap);
  while (
    right < s.length &&
    Object.keys(sMap).length != Object.keys(tMap).length
  ) {
    let char = s[right];
    if (tMap.hasOwnProperty(char)) {
      if (!sMap.hasOwnProperty(char)) sMap[char] = 0;
      sMap[char] += 1;
    }
    right += 1;
  }
  return right;
};

let adjust = (s, left, right, tMap, sMap) => {
  while (right < s.length) {
    if (tMap.hasOwnProperty(s[right])) {
      sMap[s[right]] += 1;
      left = reduceLeft(s, left, right, sMap, tMap);
    }
    right += 1;
  }
  return [left, right];
};

let checkMatchingMaps = (sMap, tMap) => {
  let s_keys = Object.keys(sMap);
  let t_keys = Object.keys(tMap);

  if (s_keys.length != t_keys.length) return false;
  s_keys.forEach((key) => {
    if (sMap[key] != tMap[key]) return false;
  });
  return true;
};

let reduceLeft = (s, left, right, sMap, tMap) => {
  let balance = false;
  while (left < right && balance == false) {
    let char = s[left];
    if (sMap[char] != undefined && sMap[char] != tMap[char]) {
      sMap[char] -= 1;
    }
    left += 1;
    if (sMap[s[left]] != undefined && sMap[s[left]] == tMap[s[left]])
      balance = true;
  }
  return left;
};

let s = 'ADOBECODEBANC';
let t = 'ABC';
console.log(minWindow(s, t));
