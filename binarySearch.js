/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
*/

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start+end)/2);
    while(start <= end) {
        if(arr[middle] === value) {
            return middle;
        }else if (value > arr[middle]) {
            start = middle+1;
        } else {
            end = middle-1;
        }
        middle = Math.floor((end+start)/2);
    }
    return -1;
}

console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10))