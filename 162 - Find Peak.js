let findPeak = (lst) => {
  if (lst.length == 0) return -1;
  if (lst.length == 1) return lst[0];
  if (sorted(lst)) return -1;
  if (revSorted(lst)) return -1;

  for (let i = 1; i < lst.length - 1; i++) {
    if (lst[i - 1] < lst[i] && lst[i + 1] < lst[i]) return i;
  }
  return -1;
};
