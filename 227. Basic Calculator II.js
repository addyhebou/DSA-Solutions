var calculate = function (s) {
  let exp = [];
  let res = 0;
  let operate = false;

  for (let ind = 0; ind < s.length; ind++) {
    let char = s[ind];
    if (!isNaN(char) && char !== ' ') {
      let num = getFullNum(s, ind);
      if (operate) {
        let op = exp.pop();
        if (op === '*') exp.push(exp.pop() * parseInt(num));
        else if (op === '/') exp.push(exp.pop() / parseInt(num));
        operate = false;
      }
      exp.push(char);
    } else if (char === '+' || char === '-') exp.push(char);
    else if (char === '*') {
      operate = true;
      exp.push(char);
    } else if (char === '/') {
      operate = true;
      exp.push(char);
    }
  }

  res += parseInt(exp[0]);
  exp.forEach((char, ind) => {
    if (char === '+') res += parseInt(exp[ind + 1]);
    else if (char === '-') res -= parseInt(exp[ind + 1]);
  });
  return res;
};

let getFullNum = (s, ind) => {
  let res = s[ind];
  while (!isNaN(parseInt(s[ind + 1]))) {
    res += s[ind + 1];
    ind += 1;
  }
  return parseInt(res);
};

console.log(calculate('42'));
