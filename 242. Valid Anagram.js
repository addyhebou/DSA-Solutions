var isAnagram = function (s, t) {
  let sMap = buildMap(s);
  let tMap = buildMap(t);

  return compareMaps(sMap, tMap);
};

let buildMap = (str) => {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map.hasOwnProperty(str[i])) map[str[i]] = 0;
    map[str[i]] += 1;
  }
  return map;
};

let compareMaps = (mapA, mapB) => {
  let a_keys = Object.keys(mapA);
  let b_keys = Object.keys(mapB);
  let match = true;
  if (a_keys.length != b_keys.length) match = false;
  a_keys.forEach((key) => {
    if (mapA[key] != mapB[key]) match = false;
  });
  return match;
};

console.log(isAnagram('anagrams', 'nasgaram'));
