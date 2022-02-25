let stringRotation = (s1, s2) => {
  if (s1.length != s2.length) return false;
  let start = getStart(s2, s[1]);
  if (!start) return false;
  return s1 == unravel(s2, start);
};

let getStart = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) return;
  }
};

let unravel = (str, start) => {
  let result = '';
  let i = 0;
  while (i < str.length) {
    result += str[start % str.length];
    start += 1;
    i += 1;
  }
  return result;
};
