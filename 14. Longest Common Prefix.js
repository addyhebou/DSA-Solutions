let longestCommonPrefix = (strs) => {
  // (1) declare prefix
  let prefix = '';

  // (2) get the shortest word length
  let shortestWordLength = Infinity;
  strs.forEach((word) => {
    shortestWordLength = Math.min(shortestWordLength, word.length);
  });

  let lastindex = 0;
  for (let i = 0; i < shortestWordLength; i++) {
    strs.forEach((word) => {
      if (word[i] != strs[0][i]) {
        lastindex = i;
      }
    });
  }
  return strs[0].substring(0, lastindex - 1);
};

console.log(longestCommonPrefix(['ball', 'balloon', 'ballroom']));
