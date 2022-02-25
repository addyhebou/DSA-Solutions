class MovingAverage {
  constructor(size) {
    this.q = [];
    this.size = size;
    this.sum = 0;
  }

  next(val) {
    if (val) {
      if (this.q.length == this.size) {
        this.sum -= this.q[0];
        this.q.shift();
      }
      this.q.push(val);
      this.sum += val;
      console.log(this.q);
      return this.sum / this.q.length;
    }
  }
}

let m = new MovingAverage(3);
console.log(m.next(1));
console.log(m.next(10));
console.log(m.next(3));
console.log(m.next(5));

/*
Time = O(n)
Space = O(k) k for the size capacity
*/
