function findArrayItem(arr, item) {
  debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return { item: item, index: i };
    }
  }
  return -1;
}
const res = findArrayItem([1, 2, 3, 4, 5], 5);
console.log(res);

// this is test commit from another branch
