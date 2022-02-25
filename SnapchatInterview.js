/*
MxN grid

a b c
c c h
a d p

def findWord(grid, word) -> bool
True if word is in grid
False otherwise

findWord('abc') -> true
findWord('abf') -> false
findWord('adphp') -> false # cannot reuse character



Questions:
1. null words passed in -> return false
2. assume every character is lowercase a-z
3. can only travel vertically and horizontally
4. parameter of list of lists
5. You could also go backwards for a word

findWord('aca') -> true


Example:

findWord('bd')

[[d,b], [c,a]]
h h h
d b f
c a h

1) iterate over every element
2) once we find a match of the first letter
    3) callRecursive(firstLetter)
    * four adjacent: top, right, left, down
    4) check if adjacent letters match the next char -> recurse(adjavacentLetter)
    5) check if adjacent letters don't match the next char -> find the next adjacent letter to try out
    6) if all adjacent letters dont match the next character (all four cases fail)-> return false
7) return true

Hint: dont worry about runtime but search of all possible combinations


Optimize:
*/

grid = [
    ['h', 'h', 'h'],
    ['d', 'b', 'f'],
    ['c', 'a', 'h'],
]

function findWord(grid, word) {
    for (let i = 0; i < grid.length; i ++){
        for(let j = 0; grid[j].length; j++){
            if (grid[i][j] == word[0]) recursiveSearch(grid, i, j, word, 1)
        }
    }
}

// bd
// char = d
// above = h
// below = a
// left = d
// right = f

// search(d)

/*

char = 
*/



function recursiveSearch(grid, i, j, word, index){
    if (index == word.length) return true
    let char = word[index]
    /* What if cell does not exist*/
    let above = grid[i-1][j]
    let below = grid[i+1][j]
    let left = grid[i][j-1]
    let right = grid[i][j+1]
    
    // Base Case
    if (char != above && char != belfffow && char != left && char != right) return false
    
    // check if character has adjacents
    if (char == above)
        let testAbove = recursiveSearch(grid, i-1, j, word, index + 1)
    else if (char == below)
        let testBelow = recursiveSearch(grid, i+1, j, word, index + 1)
    else if (char == left)
        let testLeft = recursiveSearch(grid, i, j-1, word, index + 1)
    else if (char == right)
        let testRight = recursiveSearch(grid, i, j+1, word, index + 1)
    
    return testAbove || testBelow || testLeft || testRight
    
    
}



function recursiveSearch(/* TODO */) { /* TODO */ }
    // base cases
    // how do we tell when we're done recursing and we've *found* the word
            // when we've processed the entire string
    // how do we tell when we're done and this is obviously not the path we want to go down
            //
    // else what do we do when we're not done recursing