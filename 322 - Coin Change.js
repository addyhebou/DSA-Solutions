let coinChange = (coins, amount) => {
  // 1) Declare DP Map
  let dpMap = {};

  // 2) Recurcive function
  let getMinCoins = (subAmount) => {
    // 3) Base Case
    if (subAmount == 0) {
      dpMap[0] = 0;
      return 0;
    }

    // 4) Getting each children node and pushing into array
    let diffVals = [];
    let min = Infinity;
    coins.forEach((val) => {
      if (subAmount - val >= 0) diffVals.push(subAmount - val);
    });

    // 5) saving the min of each recurcivs call
    diffVals.forEach((val) => {
      if (dpMap.hasOwnProperty(val)) min = Math.min(min, dpMap[val]);
      else min = Math.min(min, getMinCoins(val));
    });

    // 6) add one to include current node & change min to -1 for no min found
    dpMap[subAmount] = min + 1;
    return min + 1;
  };

  // 7) call getMinCoins
  if (getMinCoins(amount) == Infinity) return -1;
  return getMinCoins(amount);
};

let coins = [1, 2, 5];
let amount = 9;

console.log(coinChange(coins, amount));
