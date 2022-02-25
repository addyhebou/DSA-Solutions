var nodesBetweenCriticalPoints = function (head) {
  if (!head.next.next) return [-1, -1];
  let prev = head;
  let curr = prev.next;
  let next = curr.next;

  let indices = [];
  let i = 2;
  let min = Infinity;
  let max = -1;
  while (next) {
    if (criticalPoint(prev, curr, next)) {
      if (indices.length >= 1) {
        min = Math.min(min, i - indices[indices.length - 1]);
      }
      indices.push(i);
    }
    prev = curr;
    curr = next;
    next = curr.next;
    i += 1;
  }
  console.log(indices);
  return [
    min !== Infinity ? min : -1,
    indices.length > 1 ? indices[indices.length - 1] - indices[0] : -1,
  ];
};

let criticalPoint = (prev, curr, next) => {
  if (prev.val > curr.val && curr.val < next.val) return true;
  if (prev.val < curr.val && curr.val > next.val) return true;
  return false;
};
