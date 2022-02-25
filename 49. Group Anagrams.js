var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    /* O(n * klogk) = O(nklogk),n = strs length, k = length of each word */
    let word = alphabetize(strs[i]);
    map = addToMap(map, word);
  }

  let output = [];
  Object.keys(map).forEach((key) => {
    let group = [];
    for (let i = 0; i < map[key].length; i++) {
      group.push(strs[map[key][i]]);
    }
    output.push(group);
  });

  return output;
};

let alphabetize = (word) => {
  return word.split('').sort().join();
};

let addToMap = (map, word) => {
  if (!map.hasOwnProperty(word)) map[word] = [];
  map[word].push(i);
  return map;
};
