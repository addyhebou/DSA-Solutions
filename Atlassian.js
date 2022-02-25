function findSimilar(a, b) {
  return isSimilar(a, b) ? findPermutations(a) : findPermutations(b);
}

let isSimilar = (a, b) => {
  a = trim(a);
  b = trim(b);
  if (a.length !== b.length) return false;
  let aMap = constructMap(a);
  let bMap = constructMap(b);
  let similar = true;
  Object.keys(aMap).forEach((aKey) => {
    if (!bMap.hasOwnProperty(aKey)) similar = false;
    if (aMap[aKey] !== bMap[aKey]) similar = false;
  });
  return similar;
};

let trim = (str) => {
  let start = 0;
  while (str[start] === '0') start += 1;
  return str.slice(start);
};

let constructMap = (str) => {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!map.hasOwnProperty(char)) map[char] = 0;
    map[char] += 1;
  }
  return map;
};

let getPermuations = (str) => {
  let output = new Set();
  let helper = (arr, curr = 0) => {
    if (curr == arr.length - 1) {
      let perm = arr.toString();
      if (perm[0] !== '0') {
        output.add(arr.toString());
      }
    }
    for (let i = curr; i < arr.length; i++) {
      arr = swap(arr, curr, i);
      helper(arr, curr + 1);
      arr = swap(arr, curr, i);
    }
  };
  helper([...str]);
  return output.size;
};

let swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

let findPermutations = (string) => {
  if (!string || typeof string !== 'string') {
    return 'Please enter a string';
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = new Set();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) continue;

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let i = 0; i < findPermutations(remainingChars).size; i++) {
      let perm = char + permutation;
      if (perm[0] !== '0') permutationsArray.add(char + permutation);
    }
  }
  return permutationsArray.size;
};

console.log(findSimilar('770076030771', '761770770030'));
