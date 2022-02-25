let isValid = (s) => {
  if (s.length % 2 == 1) return false;
  if (s.length == 0) return true;
  let stack = [];
  let left = new Set();
  left.add('(');
  left.add('[');
  left.add('{');
  let map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (left.has(s[i])) stack.push(s[i]);
    else {
      let char = stack.pop();
      if (map[char] != s[i]) return false;
    }
  }
  return stack.length == 0;
};

console.log(isValid('()[]{}'));
