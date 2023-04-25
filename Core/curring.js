// currying concept via bind.

const multiply = function (x, y) {
  console.log(x * y);
};

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // y= 5 ---> 2*5 = 10

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); // y= 5 ---> 3*5 = 15

// currying via closure way...
const closureMuliply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
closureMuliply(2)(3)(); // 6

/**
 *  solve this problem - sum(1)(2)(3)(4).......(n)();
 */
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}
const res = sum(1)(2)(3)(4)(5)(6)();
console.log(res);
