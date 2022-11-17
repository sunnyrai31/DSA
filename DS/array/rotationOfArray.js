export function rotationOfArray(arr, arrSize, index) {
  let temp = new Array(arrSize);
  let k = 0;
  for (let i = index; i < arrSize; i++) {
    temp[k] = arr[i];
    k++;
  }
  for (let i = 0; i < index; i++) {
    temp[k] = arr[i];
    k++;
  }
  return temp;
}
