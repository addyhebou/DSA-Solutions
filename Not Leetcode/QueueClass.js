class Queue {
  constructor() {
    this.q = [];
  }

  enqueue(elem) {
    this.q.push(elem);
  }

  dequeue() {
    this.q.shift();
  }

  isEmpty() {
    return this.q.length == 0;
  }

  display() {
    this.q.forEach((element) => {
      console.log(element);
    });
  }
}

let test = new Queue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.dequeue();
test.display();
