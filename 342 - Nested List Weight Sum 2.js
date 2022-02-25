/* 

    COMPANY: LinkedIn
    Nested List Weight Sum 2
    Input: [1, [4, [6]]]
    Output: 17
    LEVEL: Medium
   
*/


let wSum2 = (lst) => {
    let maxDepth = 0; // needs to be global to be used in another function

    let findMaxDepth = (lst) => {
        lst.forEach(element => {
            if (typeof element !== 'number') maxDepth = Math.max(maxDepth, findMaxDepth(element));
        });
        return maxDepth + 1;
    }

    let totalSum = (lst, maxDepth) => {
        let wSum = 0; // doesn't need to be in another function so privatize it
        lst.forEach(element => {
            if (typeof element === 'number') wSum += element * maxDepth;
            else wSum += totalSum(element, maxDepth - 1);
        })
        return wSum;
    }

    return totalSum(lst, findMaxDepth(lst));
}

let lst = [1, [1, [1], 2], 3];
console.log(wSum2(lst));



let depthSumInverse = (nestedLst) => {
    let dfs = (lst, depth) => {
        let sum = 0;
        lst.forEach(element => {
            if (typeof element == "number") sum += element * depth;
            else sum += dfs(element, depth - 1)
        });
        return sum;
    }

    let getMaxDepth = (nestedLst) => {
        let maxDepth = 0;
        nestedLst.forEach(element => {
            if (typeof element != "number") {
                maxDepth = Math.max(maxDepth, getMaxDepth(element));
                // the max depth is whichever is greater: curr max or max of that element
                // must have faith and assume that the max depth of an element is received
            }
        })
        return maxDepth + 1;
    }
    return dfs(nestedLst, getMaxDepth(nestedLst));
}

param = [1, [1, [1], 2], 3];
console.log(depthSumInverse(param));


/*

[1 , [3] , [ [2,1] ] , [ [ [1] ] ]    ]

Process consists of two processes
1) Find maximum depth of the nested list (to know what to multiply the first element number by)
2) Totaling up each integer x weight

(1) Find maximum depth of the nested list
Make a max depth global variable
Iterate over each element:
if its a list, set maxdepth to equal max(maxdepth and max of current list (recurse))
return the maxdepth + 1 (to include the starting depth at 1, not 0)

* for loop checks over each element *

(2) Totaling up each integer x weight
starting weight is passed in from maxDepth function
initialize sum variable in recrusive function because this function revolves around returning a final sum, so variables should be set within. it should only be global if it will be used in other functions. otherwise, privatize it.
iterate over each element and increment sum by that element * weight IF its a number
- return that sum back to when it was called (either call stack or final function return)
if its not a number, find sum of THAT element through recursion and add it to sum
- return that sum back to when it was called (either call stack or final function return)

    Input: [1, [1, [1], 2], 3]
    Output: 19

    Input: [1, [4, [6]]]
    Output: 17

    Input: [1, [2, [1]], [2]]

    Input: [1, [[1]], [1]]

*/

let wSum2 = (lst) => {
    // Find Max Depth
    let depth = 0;
    let maxDepth = (lst) => {
        lst.forEach(element => {
            if (typeof element !== 'number') depth = Math.max(maxDepth(element));
        })
        return depth + 1;
    }
    // Sum Up Each Integer x Weight
    let totalSum = (lst, depth) => {
        let sum = 0;
        lst.forEach(element => {
            if (typeof element === 'number') sum += element * depth;
            else sum += totalSum(element, depth - 1)
        })
        return sum;
    }
    console.log(maxDepth(lst));
    return totalSum(lst, maxDepth(lst));
}

let a = [1, [4, [6]]];
console.log("wSum2 of a is: ", wSum2(a));












let weightSum2 = (nestedLst) => {
    // two processes: find total depth, and calcWeight
    let findDepth = (nestedLst) => {
        let depth = 0;
        nestedLst.forEach(element => {
            if (typeof element != "number"){
                depth = Math.max(depth, findDepth(element));
            }
        })
        return depth + 1;
    }

    let calcWeight = (nestedLst, maxDepth) => {
        let weight = 0;
        nestedLst.forEach(element =>{
            if (typeof element == 'number') weight += element * maxDepth;
            else{
                let num = calcWeight(element, maxDepth - 1);
                weight += num;
            }
        })
        return weight;
    }

    return calcWeight(nestedLst, findDepth(nestedLst));
}

console.log(weightSum2(param));


/*
weight sum 1
Input: [1, [1, [1], 2], 3]
Output: 13


input: [1, [1], 1]
output: 4
*/

let weightSum1 = (nestedLst) => {
    let sum = 0;
    let weight = 1;
    let calcWeight = (nestedLst, weight) => {
        nestedLst.forEach(element =>{
            if (typeof element == 'number') sum += element * weight;
            else calcWeight(element, weight + 1);
        })
        return sum;
    }
    return calcWeight(nestedLst, weight);
}

console.log(weightSum1(param));
