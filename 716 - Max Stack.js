let maxSubArray = (arr) => {
    let sum = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > sum) sum = arr[index];
        else sum += arr[index];
    }
}

// https://www.youtube.com/watch?v=5WZl3MMT0Eg