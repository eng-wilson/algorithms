function binarySearch(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(start + (end - start) / 2);

  while (start <= end) {
    if (target === arr[middle]) {
      return middle;
    }
    if (target > arr[middle]) {
      start = middle + 1;
    }
    if (target < arr[middle]) {
      end = middle - 1;
    }
    middle = Math.floor(start + (end - start) / 2);
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
