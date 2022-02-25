/**
 * @param {string} s
 * @return {string}
 
 
 treeeeeee
 
 map:
 
 t: 1
 r: 50
 e: 100
 a: 1
 b: 1
 q: 50
 
 
 */

class MaxHeap {
  constructor() {
    /* Initialing the array heap and adding a dummy element at index 0 */
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMax() {
    /* Accessing the min element at index 1 in the heap array */
    return this.heap[1];
  }

  insert(node) {
    /* Inserting the new node at the end of the heap array */
    this.heap.push(node);

    /* Finding the correct position for the new node */

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)][0] < this.heap[current][0]
      ) {
        /* Swapping the two nodes by using the ES6 destructuring syntax*/
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    /* Smallest element is at the index 1 in the heap array */
    let smallest = this.heap[1];

    /* When there are more than two elements in the array, we put the right most element at the first position
          and start comparing nodes with the child nodes
      */
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1][0] < this.heap[2][0]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current][0] < this.heap[leftChildIndex][0] ||
          this.heap[current][0] < this.heap[rightChildIndex][0])
      ) {
        if (this.heap[leftChildIndex][0] > this.heap[rightChildIndex][0]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      /* If there are only two elements in the array, we directly splice out the first element */
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }
}

var frequencySort = function (s) {
  let freqMap = buildMap(s);
  let maxHeap = buildHeap(freqMap);
  let out = '';

  while (maxHeap.size() > 0) {
    let node = maxHeap.remove();
    out += node[1].repeat(node[0]);
  }

  return out;
};

let buildMap = (s) => {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map.hasOwnProperty(s[i])) map[s[i]] = 0;
    map[s[i]] += 1;
  }
  return map;
};

/*
   2
 1   1

*/

let buildHeap = (map) => {
  let res = new MaxHeap();
  Object.keys(map).forEach((key) => {
    res.insert([map[key], key]);
  });
  return res;
};

console.log(frequencySort('tree'));