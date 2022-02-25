let threeSum = (array) => {
  if (array.length < 3) return [];
  let output = [];
  let arr = array.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    if (i > 0 && a === arr[i - 1]) {
      continue;
    }
    twoSum(arr.slice(i + 1), a, output);
  }
  return output;
};

let twoSum = (arr, a, output) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = a + arr[left] + arr[right];
    if (sum < 0) left += 1;
    else if (sum > 0) right -= 1;
    else {
      output.push([a, arr[left], arr[right]]);
      left += 1;
      while (arr[left] == arr[left - 1] && left < right) {
        left += 1;
      }
    }
  }
  return [];
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
