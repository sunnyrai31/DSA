const arr = [1, 2, 3, 4, 5];
const res = arr.filter((item) => item > 2);
console.log("filtered response", res);

Array.prototype.myFilter = function (cbFunction) {
  const arr = this;
  const res = [];
  for (let index = 0; index < arr.length; index++) {
    if (cbFunction(arr[index])) {
      res.push(arr[index]);
    }
  }
  return res;
};

const myRes = arr.myFilter((item, index, arr) => item > 4);
console.log("custom filter response", myRes);
