/* 

    COMPANY: LinkedIn
    Max Depth of Binary Tree
    Input: [0,0,0,1,0,0,0,0,0]
    Output: 3 spots available, so true
    Level: Easy

*/

let canPlaceFlowers = (flowerbed, n) => {
    let available = 0;
    for (let index = 1; index < flowerbed.length - 1; index ++) {
        if (flowerbed[index] == 0){
            if ((flowerbed[index - 1] == 0) && (flowerbed[index + 1] == 0)){
                available += 1;
                flowerbed[index] = 1;
            }
        }
    }
    console.log(`Available spots: ${available}\n`);
    return (n <= available);
}

console.log(canPlaceFlowers([0,0,0,1,0,0,0,0,0], 2));