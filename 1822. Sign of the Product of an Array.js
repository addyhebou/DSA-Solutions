// Easiest lt problem
var arraySign = function (nums) {
  let product = 1;

  nums.forEach((num) => {
    product *= num;
  });

  return product > 0 ? 1 : product < 0 ? -1 : 0;
};
