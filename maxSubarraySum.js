function maxSubarraySum(array, num) {
    if (array.length <num) {
      return null;
    }
    let maxSum = 0;
    for(let i=0;i<num;i++) {
      maxSum +=array[i];
    }
    let tempMaxSum = maxSum;
    for (let i = num; i < array.length; i++) {
        tempMaxSum += array[i] - array[i-num];
        maxSum = Math.max(maxSum, tempMaxSum);
     }
     return maxSum;
    }
    
    console.log(maxSubarraySum([100,200,300,400], 2));