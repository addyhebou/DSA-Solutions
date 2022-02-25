/*
Given a list of words and two words word1 and word2, 
return the shortest distance between these two words in the list.

For example,
Assume that words = ["pop", "hip hop", "rock", "country", "hip hop"].


Given word1 = “country”, word2 = “pop”, return 3.
Given word1 = "hip hop", word2 = "country", return 1.
*/

let shortestWordDistance = (lst, word1, word2) => {
    let point1 = -1;
    let point2 = -1;
    let min = Infinity;

    for (let i = 0; i < lst.length; i ++) {
        if (lst[i] === word1) {
            point1 = i;
            if (point2 > -1) min = Math.min(min, Math.abs(point2 - point1));
        } 
        
        else if (lst[i] === word2) {
            point2 = i;
            if (point1 > -1) min = Math.min(min, Math.abs(point1 - point2));
        }
    }
    return min;
}



words = ("fuzzy wuzzy was a bear fuzzy wuzzy had no hair fuzzy wuzzy was not fuzzy was he").split(' ');
console.log(shortestWordDistance(words, 'was', 'fuzzy'));


/*


The notes are as follows:

Imagine a set of words:

" i love you more than i love myself "

the algorithm is to:

1) go over each word
2) if one of those words match any of the arguments, then save a checkpoint, point, label, tag - WHATEVER. save it (or update) at that index postion. 
3) right after making your latest point, check if by any chance the other word has a checkpoint.
4) if it does, then update your min value to be the minimum between your current min value and the difference between your two points
5) after you went through the list, return the min value

// you want to set the initial min value to the highest val you can think of - Infinity


*/