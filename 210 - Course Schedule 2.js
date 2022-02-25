/*

let findOrder = (numCourses, prerequisites) => {
  // 1. Setup a Hash Map to setup (parent, child) pairs -> in this case, (course, prerequisite) pairs
  let hashMap = {};
  prerequisites.forEach((coursePair) => {
    let course = coursePair[0];
    let preCourse = coursePair[1];
    if (!(course in hashMap)) hashMap[course] = [];
    hashMap[course].push(preCourse);
  });

  // 2. Set up 3 different collections: output, visited, and currentCycle
  let output = [];
  let visited = new Set();
  let currentCycle = new Set();

  let dfs = (course) => {
    // (1) Check if the course is in the cycle already or has already been visited/processed
    if (currentCycle.has(course)) return false; // if the course is in its current cycle, return true and don't process anything else
    if (visited.has(course)) return; // if the course has been visited, then return true and don't process anything else

    // (2)
    currentCycle.add(course); // add course to current cycle since none of those qualifying conditions passed
    if (hashMap[course] in hashMap) {
      Object.keys(hashMap[course]).forEach((pre) => {
        // process all its preReqs children
        if (dfs(pre) == false) return false; // if the course runs into same cycle return out of it
      });
    }
    currentCycle.delete(course);
    visited.add(course);
    output.push(course);
    return;
  };

  // 3. Run DFS on every key in the hashmap - in this case, the keys are simply integers, so no need to traverse the keys specifically. rather just use for loop
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) == false) return [];
  }
  return output;
};
*/

/*
Algorithm Notes: 
Any type of tracing parents for order will most likely involve topological sort

Topological Sort involves having to run DFS on a node by visiting all its children.
Once all its children have been visited, then mark the node as visited and do whatever you need with that data (in this case, we add to output)

1. Set up a hashMap to be able to quickly access (parent, child) pairs
2. Setup 3 different collections: output list, visited set, and a currentCycle set - current cycle is the list of current vodes we're processing
                                                                                      if the course we're processing exists in the cycle when we're checking, its cyclic and invalid
3. Run DFS on every key in the hashMap, if any of those keys return false, return [] => it means there's a cycle present (only time where a return false happens)


DFS Notes:

1. if the course we're processing is already in the current cycle, then its invalid and return false
2. if its been visited, then we can dip out of DFS already and return back
3. else, add the current node to the current cycle
4. go through each of its children and run dfs on them
5. once done running through its children, remove the current node from the cycle, add it to the output and visited collection
6. return and dip out of dfs

*/

let findOrder = (numCourses, prerequisites) => {
  // (1) Set up a hashmap to quickly access (parent, child pairs)
  let hashMap = {};
  prerequisites.forEach((pair) => {
    let course = pair[0];
    let preReq = pair[1];
    if (!(course in hashMap)) hashMap[course] = [];
    hashMap[course].push(preReq);
  });

  // (2) Setup 3 collections: visited, output, currentCycle
  let visited = new Set();
  let output = [];
  let currentCycle = new Set();

  let dfs = (course) => {
    // (1) Base cases for getting out of functions and dipping
    if (currentCycle.has(course)) return false;
    if (visited.has(course)) return;

    // (2) add current node to current cycle
    currentCycle.add(course);

    // (3) run dfs on all of course's children
    let preReq = hashMap[course];
    if (preReq in hashMap) {
      hashMap[preReq].forEach((preReq) => {
        if (dfs(preReq) == false) return false;
      });
    }

    // (4) once done running, remove from current cycle, add to output and visisted
    currentCycle.delete(course);
    visited.add(course);
    output.push(course);

    // (5) return and dip out of dfs
    return;
  };

  // (3) Run DFS on every key in the hashMap
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) == false) return [];
  }
  return output;
};

let order = findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);
console.log(order);
