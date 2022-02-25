// Standard
let fibo = (n) => {
  if (n == 1 || n == 0) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

// Memoization
let fibo_1 = (n) => {
  let memoMap = {};
  let memo = (n) => {
    if (n == 0 || n == 1) return 1;
    if (!memoMap.hasOwnProperty(n)) memoMap[n] = memo(n - 1) + memo(n - 2);
    return memoMap[n];
  };
  return memo(n);
};

// Bottom-Up
let fibo_2 = (n) => {
  if (n == 0 || n == 1) return 1;
  let memoMap = {};
  memoMap[0] = 1;
  memoMap[1] = 1;
  for (let i = 2; i <= n; i++) memoMap[i] = memoMap[i - 1] + memoMap[i - 2];
  return memoMap[n];
};

let inp = 5;
console.log(fibo(inp));
console.log(fibo_1(inp));
console.log(fibo_2(inp));
