/**  Arrya rotation ** */
function arrayrotation(arr, n) {
  /* solution using in-build javascript way */
  arr.push(...arr.splice(0, n));
  return arr;
  /*  solutio using native javascript way */
  // let splittedArr = [];
  // for (let i = 0; i <= n; i++) {
  //   splittedArr.push(arr.unshift(i));
  // }
  // console.log(arr, splittedArr);
  // arr.push(...splittedArr);
  // return arr;
}
const res = arrayrotation([1, 2, 3, 4, 5], 3);
console.log(res);
