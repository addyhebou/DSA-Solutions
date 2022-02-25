function rotLeft(a, d) {
  while (d > 0) {
    let first = a[0];
    a = a.slice(1);
    a.push(first);
    d -= 1;
  }
  return a;
}

let lst = [1, 2, 3, 4, 5];
console.log(rotLeft(lst, 4));
