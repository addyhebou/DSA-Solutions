let maxProfit = (prices) => {
  let helper = (subList) => {
    let maxIndex = subList.indexOf(Math.max(...subList));
    let minIndex = subList.indexOf(Math.min(...subList));

    if (minIndex <= maxIndex)
      return Math.max(...subList) - Math.min(...subList);
    return helper(subList.slice(minIndex));
  };
  return helper(prices);
};
