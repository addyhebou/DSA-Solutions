class WordDistance {
    constructor (words) {
        this.words = words;
        this.map = {};
        this.size = words.length;
        for (let i = 0; i < this.size; i ++){
            let word = this.words[i];
            if(!this.map[word]){
                this.map[word] = [i];
            } else {
                this.map[word].push(i);
            }
        }
    }



    calcDistance (word1, word2) {
        let a = this.map[word1];
        let b = this.map[word2];
        let minDist = Infinity;

        for (let i = 0, j = 0; i < a.length && j < b.length;){
            if (a[i] < b[j]) {
                minDist = Math.min(minDist, b[j] - a[i]);
                j++;
            }
            else{
                minDist = Math.min(minDist, a[i] - b[j]);
                j++;
            }
        }
        return minDist;
    }
}
let lst = ['practice', 'makes', 'perfect', 'coding', 'makes'];
let obj = new WordDistance(lst);
console.log(obj.calcDistance('coding', 'practice'));



