let designerPdfViewer = (h, word) => {
  if (word.length < 1) return 0;
  let max = -Infinity;

  let getHeight = (char) => {
    let index = parseInt(char, 36) - 10;
    return h[index];
  };

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    max = Math.max(max, getHeight(char));
  }
  return max * word.length;
};

/*
Time: O(n)
Space: O(1)
*/

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
console.log(designerPdfViewer(h, 'abc'));
