var isSubsequence = function (s, t) {
  let sp = 0;
  let tp = 0;

  while (tp < t.length) {
    if (s[sp] === t[tp]) sp += 1;
    tp += 1;
  }
  return sp === s.length;
};
