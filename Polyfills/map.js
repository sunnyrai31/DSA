const arr = [1, 2, 3, 4, 5];

/* in build array map, usage */
const res = arr.map((item, index) => {
  return item * 2;
});
console.log("in build array map", res);

/**
 * 
 * @param {*} cbFunction  
 * explaination of cbFunction.
 * cbFunction = function (item, index){
  return item * 4;
  or callback of myMap.
}
 * @returns [], return the same size of array
 */

Array.prototype.myMap = function (cbFunction) {
  const arr = this;
  const res = [];
  for (let index = 0; index < arr.length; index++) {
    res[index] = cbFunction(arr[index], index);
  }
  return res;
};
const newRes = arr.myMap((item, index) => {
  return item * 4 + index;
});
console.log(newRes);
