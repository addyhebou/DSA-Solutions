// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
// For example brainy and binary are anagrams, but brain and binary are not.
// Please implement a function that would print out all the anagrams in a given array. For example, an input array of:
// [‘add’, ‘cat’, ‘tac’, ‘mom’, ‘dad’] should output [‘add’, ‘cat’, ‘tac’, ‘dad’]
// { 'add' -> [0, 4], 'act' -> [1, 2], 'mmo' -> [3]}

let wordMap = {};
let output = [];
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (!wordMap.hasOwnProperty(word.alphabetize()))
    // O(klogk)
    wordMap[word.alphabetize()] = []; //O(klogk)
  wordMap[word.alphabetize()].push(i); //O(klogk)
  //   if (wordMap[word.alphabetize()].length > 1) output.push(word);
}

Object.keys(wordMap).forEach((key) => {
  // O(n * k)
  if (wordMap[key].length > 1) {
    wordMap[key].forEach((index) => {
      // O(k)
      output.push(words[index]);
    });
  }
});
/*

output:
wordMap:
{
    'add': [0],
    'act': [1, 2],

}

*/

/*

Clarifications
1) empty arg -> empty array
2) assume all characters are lowercase
3) standard ASCII
4) all entries unique


Brute Force: O(n^2)


Picture:

Small example: ['add', 'cat' 'tac']

'add'


Algorithm

1) first pass sweep -> add words to a wordMap O(n)
{
'add': 'add'
'cat': 'act'
'tac': 'act'
}

2) second pass sweep -> iterates over each word (called key) in the array O(n)
	3) compare map[key] to every key, value pair in map
  		4) if there is a match, add key to output array

Time: O(n^2)
Space: O(n)

*/

let isAnagram = (word1, word2) => {
  // TODO: fill this in later
};

let returnAnagrams = (lst) => {
  // If no list
  if (!lst) return [];
  let wordMap = {};
  let output = [];

  // 1) First sweep - O(n * klogk), n --> number of elem in array
  lst.forEach((word) => {
    wordMap[word] = word.alphabetize(); // O(klogk) -> sorting algorithm), k --> avg length of word in the array
  });

  // 2) Second Sweep - O(n^2)
  Object.keys(wordMap).forEach((key) => {
    let compareKey = key;
    Objects.keys(wordMap).forEach((innerKey) => {
      if (compareKey != innerKey) {
        if (wordMap[compareKey] == wordMap[innerKey]) output.push(compareKey);
      }
    });
  });

  // 3) Return
  return output;
};
/*
  
  1) Comparing strings as anagrams as alphabetized versions (done in the anagram function)
  2) Higher level of abstraction -> create the functions and assume it works from the jump
          TIME IS OFF THE ESSENCE -> just abstract simple functions to do simple work (i.e alphabetizing, isAnagram - simple comparison)
      DONT GET BOGGED DOWN EARLY ON THE ACTUAL SIMPLE COMPARISONS
  3) sweep over each line and check for nested methods -> incorporate those into total runtime, space analysis (sorting - nlogn)
  
  
  REFLECTION PIECE: go line by line for complexities, call out potential/remaining issues in the code, discuss what you would do if you had more time
  ABSTRACTION PIECE: dont be bogged down on specifics
  
  
  Question: Is this a common algorithm or pattern?
  the pattern:
  - preprocessing based on what we need to compare in place
  - add new-processed elements as indices as val in key,val pair in map
  
  Patterns for Anagrams:
  - alphabetize-sort each word before making simple string comparisons
  
  
  
  
  
  */

// [abc, acb, bca]

/*
  'abc': 'abc'
  'acb': 'abc'
  'bca': 'abc'
  
  */

/*
  Time: O(n^2)
  Space: O(n)
  */

/*
    
    'add'
    {
    'add': 'add'
    }
  
    
    
    
    compare = 'cat'
    if wM['cat'] == wM['tac'], output.push('cat', 'tac)
    
    
    output: ['cat', 'tac'
    */
