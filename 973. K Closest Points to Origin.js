let map = {};
let maxHeap = new MaxHeap();
let output = [];

// 1) Calculate distances => store in map with indx
for (let i = 0; i < points.length; i++) {
  map[getDistance(points[i])];
}

// 2) MaxHeap the keys
Object.keys(map).forEach((val) => {
  maxHeap.add(val);
  if (maxHeap.size() < k) maxHeap.pop();
});

// 3) Loop over all elements in the heap and access their indices in the map
for (let i = 0; i < maxHeap.size(); i++) {
  output.push(points[map[maxHeap.pop()]]);
}

// 4) Return points
return output;
