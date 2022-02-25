var intersection = function (nums1, nums2) {
  if (nums1.length < 1 || nums2.length < 1) return [];
  let a = new Set();
  let b = new Set();
  let output = [];
  nums1.forEach((num) => {
    a.add(num);
  });
  nums2.forEach((num) => {
    b.add(num);
  });
  a.forEach((num) => {
    if (b.has(num)) output.push(num);
  });
  return output;
};
