class ProductOfNumbers {
  constructor() {
    this.products = [1];
  }

  add(num) {
    let back = this.products.length - 1;
    if (num > 0) {
      this.products.push(this.products[back] * num);
    } else this.products = [1];
  }

  getProduct(k) {
    if (k >= this.products.length) return 0;
    let back = this.products.length - 1;
    return this.products[back] / this.products[back - k];
  }
}

/*
let productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);        // [3]
productOfNumbers.add(0);        // [3,0]
productOfNumbers.add(2);        // [3,0,2]
productOfNumbers.add(5);        // [3,0,2,5]
productOfNumbers.add(4);        // [3,0,2,5,4]
console.log(productOfNumbers.getProduct(2)); // return 20. The product of the last 2 numbers is 5 * 4 = 20
console.log(productOfNumbers.getProduct(3)); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
console.log(productOfNumbers.getProduct(4)); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
productOfNumbers.add(8);        // [3,0,2,5,4,8]
console.log(productOfNumbers.getProduct(2)); // return 32. The product of the last 2 numbers is 4 * 8 = 32 
*/
