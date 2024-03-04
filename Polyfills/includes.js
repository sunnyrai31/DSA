Array.prototype.includesTest = function (item) {
  console.log(this, item);
  let res = false;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      console.log("mil gya at index", i);
      res = true;
    }
  }
  return res;
};

function testInclude(arr, item) {
  return arr.includesTest(item);
}
console.log(testInclude([1, 2, 3, 4], 4));
