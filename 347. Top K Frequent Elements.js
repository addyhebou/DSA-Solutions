let topKFrequent = (nums, k) => {
  let map = {};
  let output = [];
  // 1) First-pass map
  nums.forEach((num) => {
    if (!map.hasOwnProperty(num)) map[num] = 0;
    map[num] += 1;
  });

  // Build Min-Heap of the count values of all numbers
  let minHeap = new MinHeap();
  for (const [key, value] of Object.entries(map)) {
    minHeap.add(value);
    if (minHeap.size() > k) minHeap.pop();
  }

  // 3) Add to output every element's count value in the heap
  for (let i = 0; i < k; i++) {
    output.push(minHeap.pop());
  }

  // 4) Return output
  return output;
};
