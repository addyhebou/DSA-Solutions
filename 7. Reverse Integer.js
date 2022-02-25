var reverse = function (x) {
  let output = 0;
  let digits = intToArr(x);
  let right = digits.length - 1;

  while (right >= 0) {
    output += Math.pow(10, right) * digits[right];
    right -= 1;
  }

  let inBounds = output < Math.pow(2, 31) - 1 && x > -Math.pow(2, 31);
  return output * (x < 0 ? -1 : 1) * inBounds;
};

let intToArr = (num) => {
  var myArr = String(num)
    .split('')
    .map((num) => {
      return Number(num);
    });
  if (isNaN(myArr[0])) return myArr.slice(1);
  return myArr;
};

let arrToInt = (arr) => {
  let out = '';
  arr.forEach((digit) => {
    out += digit.toString();
  });
  return parseInt(out);
};

console.log(reverse(1534236469));
