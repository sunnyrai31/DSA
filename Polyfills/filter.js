// custom filter
Array.prototype.myFilter = function (cbFun) {
  let res = [];
  for (let item of this) {
    if (cbFun(item)) {
      res.push(item);
    }
  }
  return res;
};
const arr = [1, 2, 3, 4, 5];
const res = arr.myFilter((item) => {
  return item > 1;
});
console.log(
  arr.filter((item) => {
    return item > 2;
  })
);

console.log(res);