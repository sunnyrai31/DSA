const arr = [1, 2, 3, 4, 5];
// reduce take these arguments:  previousValue/accumlator, currentValue, index, array
const res = arr.reduce((accumlator, currentValue, index, arr) => {
  return accumlator + currentValue;
}, 10);
console.log("via native way:::::", res);
console.log(
  "********************custom reduce polyfill****************************"
);

Array.prototype.customReduce = function (cbFunction, intialValue) {
  if (typeof cbFunction !== "function") {
    throw new TypeError("call back is not function");
  }
  const arr = this;
  const length = arr.length;
  let accumlator = intialValue === undefined ? arr[0] : intialValue;
  let startIndex = intialValue === undefined ? 1 : 0;

  for (let index = startIndex; index < length; index++) {
    if (index in arr) {
      accumlator = cbFunction(accumlator, arr[index], index, arr);
    }
  }
  return accumlator;
};

const custRes = arr.customReduce((accumlator, currentValue, index, arr) => {
  return accumlator + currentValue;
}, 10);
console.log("Via custom reduce way", custRes);
