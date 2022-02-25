let count_memo = (n) => {
  let memoMap = {};
  let memo = (n) => {
    if (n < 0) return 0;
    if (n == 0 || n == 1) return 1;
    if (!memoMap.hasOwnProperty(n))
      memoMap[n] = memo(n - 1) + memo(n - 2) + memo(n - 3);
    return memoMap[n];
  };
  return memo(n);
};

let count_tab = (n) => {
  if (n < 0) return 0;
  if (n == 0 || n == 1) return 1;
  let memoMap = {};
  memoMap[0] = 1;
  memoMap[1] = 1;
  memoMap[2] = memoMap[0] + memoMap[1];

  for (i = 3; i <= n; i++) {
    memoMap[i] = memoMap[i - 1] + memoMap[i - 2] + memoMap[i - 3];
  }
  return memoMap[n];
};

let s = 70;
console.log(count_tab(s));
