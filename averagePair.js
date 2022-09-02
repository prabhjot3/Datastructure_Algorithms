function averagePair(arr, avg) {
    let first = 0;
    let last = arr.length -1;
    while(first < last) {
      const average = (arr[first] + arr[last])/2;
      if (average === avg) {
        return [arr[first], arr[last]];
      }
      else if (average > avg) {
        last--;
      } else {
        first++;
      }
    }
    return undefined;
  };
  console.log(averagePair([3,4,5,6,7,8], 6))