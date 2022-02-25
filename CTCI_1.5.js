// let remove = (arg, i) => {return true}

let oneAway = (goal, arg) => {
  let min = Math.min(goal.length, arg.length);
  let leftover = Math.abs((goal.length = arg.length));
  let count = leftover;
  for (let i = 0; i < min; i++) {
    if (count > 1) return false;
    if (goal[i] != arg[i]) {
      // Insert
      if (arg[i - 1] == goal[i - 1] && arg[i] == goal[i + 1])
        insert(goal[i], arg, i);
      // Remove
      else if (arg[i - 1] == goal[i - 1] && arg[i + 1] == goal[i])
        remove(arg, i);
      // Replace = remove + insert
      else {
        remove(arg, i);
        insert(goal[i], arg, i);
      }
      count += 1;
    }
  }
  return count < 2;
};
