function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        min = arr[j];
        let temp = arr[i];
        arr[i] = min;
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(selectionSort([2, 6, 3, 5, 1, 4, 10, 7, 9]));
