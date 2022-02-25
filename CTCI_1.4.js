let checkForPalindrome = (str) => {
  if (str.length == 0) return null;
  let letterMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!letterMap.hasOwnProperty(str[i])) letterMap[str[i]] = 0;
    letterMap[str[i]] += 1;
  }
  return checkForMultipleOdds(letterMap);
};

let checkForMultipleOdds = (map) => {
  let odds = 0;
  Object.keys(map).forEach((key) => {
    if (map[key] % 2 == 1 && odds == 1) return false;
    if (map[key] % 2 == 1) odds += 1;
  });
  return true;
};

console.log(checkForPalindrome('addy'));
