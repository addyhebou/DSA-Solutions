let productExceptSelf = (nums) => {
  // 1) Init pre and post arrays
  let prefix = [];
  let postfix = [];
  let output = [];

  let preVal = 1;
  let postVal = 1;

  // 2) calc prefix array
  for (let i = 0; i < nums.length; i++) {
    prefix.push(preVal);
    preVal *= nums[i];
  }

  // 3) calc postfix array
  for (let i = nums.length - 1; i >= 0; i--) {
    postfix.push(postVal);
    postVal *= nums[i];
  }

  // 4) add to output
  for (let i = 0; i < nums.length; i++) {
    output.push(prefix[i] * postfix[nums.length - 1 - i]);
  }

  return output;
};

//

let productExceptSelf = (nums) => {
  // 1) Init output
  let output = [];

  let preVal = 1;
  let postVal = 1;

  // 2) push prefixes in output
  for (let i = 0; i < nums.length; i++) {
    output.push(preVal);
    preVal *= nums[i];
  }

  // 3) push postfixes in output
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postVal;
    postVal *= nums[i];
  }

  return output;
};
