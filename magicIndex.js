let getMagicIndex = (lst) => {
  let search = (lst, start, end) => {
    let mid = Math.floor((start + end) / 2);
    if (lst[mid] == mid) return mid;
    if (lst.length == 1) return null;
    if (lst[mid] > mid) return search(lst, start, mid - 1);
    else return search(lst, mid + 1, end);
  };
  return search(lst, 0, lst.length - 1);
};

let A = [-40, -20, -1, 1, 3, 3, 5, 7, 9, 12, 13];
console.log(getMagicIndex(A));
