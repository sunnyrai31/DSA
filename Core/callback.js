/***************callback*************/
console.log("***************callback *************");
const myFunction = function () {
  console.log("This is my function");
};
const firstFunction = function (cbFunction) {
  return cbFunction();
};

firstFunction(myFunction);

/***************callback hell*************/
console.log("***************callback hell*************");

const callbackHell = function () {
  console.log("main function");
  return function () {
    setTimeout(() => {
      console.log("first inner function");
    }, 6);
    return function () {
      setTimeout(() => {
        console.log("second inner function");
      }, 1);
      return function () {
        setTimeout(() => {
          console.log("third inner function");
        }, 5);
      };
    };
  };
};
callbackHell()()()();
/*************Closure************* */
console.log("***************Closure*************");

const Closure = function () {
  const name = "sunny";
  return function () {
    return name;
  };
};
const callingFn = Closure();

console.log(callingFn());
console.log("***************end of Closure*************");
