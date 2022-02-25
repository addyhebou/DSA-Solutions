class Queue {
  constructor() {
    this.q = [];
  }
  enqueue(node) {
    if (node) this.q.push(node);
  }

  dequeue() {
    let node = this.q[0];
    this.q.shift();
    return node;
  }

  isEmpty() {
    return this.q.length == 0;
  }

  size() {
    return this.q.length;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.adjacents = [];
    this.visited = false;
  }
}

let doesRouteExist = (start, goal) => {
  if (!start) return false;
  if (!goal) return false;
  if (start == goal) return true;

  // 1) Add start node to queue
  let queue = new Queue();
  start.visited = true;
  queue.enqueue(start);

  // 2) Go through each adjacent
  while (queue.size() > 0) {
    let node = queue.dequeue();
    if (node.adjacents.length > 0) {
      node.adjacents.forEach((adj) => {
        if (adj == goal) return true;
        if (!adj.visited) {
          queue.enqueue(adj);
          adj.visited = true;
        }
      });
    }
  }

  // 3) No pathway
  return false;
};
