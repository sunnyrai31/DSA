Array.prototype.myFilter = function (callback) {
  const _arr = this;
  const res = [];
  for (let i = 0; i < _arr.length; i++) {
    if (callback(_arr[i])) {
      res.push(_arr[i]);
    }
  }
  return res;
};

const arr = [1, 2, 3, 4, 5];
const res = arr.myFilter((item) => item != 4);
console.log("res", res);

Function.prototype.cutomBind = function (ref) {
  return () => {
    this.call(ref);
  };
};

let myObj = {
  name: "this is sunny",
  printInfo: function () {
    console.log(this.name);
  },
};
let fromObj = { name: "this is sunny rai" };
const letCall = myObj.printInfo.cutomBind(fromObj);
console.log(letCall());

//custom map
Array.prototype.myMap = function (callback) {
  const _arr = this;
  const res = [];
  for (let i = 0; i < _arr.length; i++) {
    res.push(callback(_arr[i]));
  }

  return res;
};

const arrMap = [1, 2, 3].myMap((item) => item * 2);
console.log(arrMap);

// remove dupliate fromt the array.

// using filter
function removeDuplicateFilter(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
console.log(removeDuplicateFilter([1, 2, 3, 1, 2, 3, 4]));
// remove dupliate for Each
function removeDuplicateForEach(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.length == 0 || unique.indexOf(arr[i]) < 0) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicateForEach([1, 2, 3, 4, 5, 1, 2, 3]));

// longest consecutive substring.
