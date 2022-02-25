var maximumSwap = function (num) {
  num = num.toString();
  let indices = buildMap(num);
  let doublebreak = false;
  for (let i = 0; i < num.length; i++) {
    for (let j = 9; j > parseInt(num[i]); j--) {
      if (indices.hasOwnProperty(j.toString()) && indices[j] > i) {
        num = swap(i, indices[j], num);
        doublebreak = true;
        break;
      }
    }
    if (doublebreak) break;
  }
  return num;
};

let buildMap = (num) => {
  let map = {};
  for (let i = 0; i < num.length; i++) {
    let digit = num[i];
    map[digit] = i;
  }
  return map;
};

let swap = (i, j, num) => {
  num = num.split('');
  let temp = num[i];
  num[i] = num[j];
  num[j] = temp;
  return num.join('');
};

console.log(maximumSwap(9973));
