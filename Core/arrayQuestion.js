// Object.prototype.customBind = function (ref, callback) {
//   callback.call(ref);
// };

// this is the question asked by zscaler
Function.prototype.customBind = function (ref) {
  this.call(ref);
};

var Obj1 = {
  printfn: function () {
    console.log("my name is", this.name);
  },
};
var Obj2 = {
  name: "sunny rai",
};
const fn = Obj1.printfn.customBind(Obj2);
console.log(fn);

const arr = [1, 2, 3, 4, 5, 1, 5, 7, 5];

function extremRight(arr, number) {
  const duplicateArr = arr.filter((item) => item === number);
  let resArr = arr.filter((item) => item !== number);

  resArr = [...resArr, ...duplicateArr];
  console.log("resArr", resArr);
}
extremRight(arr, 5);
extremRight(arr, 1);
