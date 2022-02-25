let getPath = (r, c) => {
  let pathMap = {};
  let getPath_memo = (r, c) => {
    if (r == 0 && c == 0) {
      pathMap[`(0, 0)`] = '0, 0';
      return `0, 0`;
    }
    if (!pathMap.hasOwnProperty(r, c)) {
      pathMap[`(${r}, ${c})`] = [];
      pathMap[`(${r}, ${c})`].push(`(${r}, ${c})`);
      if (r - 1 >= 0) {
        pathMap[`(${r}, ${c})`].push(getPath_memo(r - 1, c));
      } else if (c - 1 >= 0) {
        pathMap[`(${r}, ${c})`].push(getPath_memo(r, c - 1));
      }
    }
    return pathMap[`(${r}, ${c})`];
  };
  return getPath_memo(r, c);
};

console.log(getPath(2, 2));
