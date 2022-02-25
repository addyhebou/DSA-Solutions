class TreeNode {
  constructor(val = 'null') {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
module.exports.TreeNode = TreeNode;

class SinglyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
module.exports.SinglyListNode = SinglyListNode;

class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
module.exports.DoublyListNode = DoublyListNode;

function createLinkedList(arr) {
  var head = null;
  var tempHead = head;
  for (var v of arr) {
    if (head == null) {
      head = new SinglyListNode(v);
      tempHead = head;
    } else {
      head.next = new SinglyListNode(v);
      head = head.next;
    }
  }
  return tempHead;
}
module.exports.createLinkedList = createLinkedList;

let printLinkedList = (headNode) => {
  while (headNode != null) {
    process.stdout.write(headNode.val + ' -> ');
    headNode = headNode.next;
  }
};
module.exports.printLinkedList = printLinkedList;

class Queue {
  constructor() {
    this.q = [];
  }

  enqueue(elem) {
    this.q.push(elem);
  }

  dequeue() {
    let elem = this.q[0];
    this.q.shift();
    return elem;
  }

  isEmpty() {
    return this.q.length == 0;
  }

  size() {
    return this.q.length;
  }

  display() {
    this.q.forEach((element) => {
      console.log(element);
    });
  }
}
module.exports.Queue = Queue;

class MinHeap {
  constructor() {
    /* Initialing the array heap and adding a dummy element at index 0 */
    this.heap = [null];
  }

  getMin() {
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
        this.heap[Math.floor(current / 2)] > this.heap[current]
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
        if (this.heap[1] > this.heap[2]) {
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
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
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

module.exports.MinHeap = MinHeap;

class MaxHeap {
  constructor() {
    /* Initialing the array heap and adding a dummy element at index 0 */
    this.heap = [null];
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
        this.heap[Math.floor(current / 2)] < this.heap[current]
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
        if (this.heap[1] < this.heap[2]) {
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
        (this.heap[current] < this.heap[leftChildIndex] ||
          this.heap[current] < this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
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

module.exports.MaxHeap = MaxHeap;
